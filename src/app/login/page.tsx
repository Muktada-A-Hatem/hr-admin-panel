"use client";

import React, { useEffect } from "react";
import Cookies from "js-cookie";
import generateUUID from "./uuid";

import Input from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FancyHR from "./../components/fancy-hr/fancy-hr";
import styles from "./login.module.css";

import { useState } from "react";
import { Typography } from "@mui/material";

interface RequestBody {
  email: string;
  password: string;
  deviceID: string;
}

export default function Login() {
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [deviceID, setDeviceID] = React.useState("");

  React.useEffect(() => {
    setDeviceID(getOrSetDeviceIdentifier());
  }, []);

  function getOrSetDeviceIdentifier() {
    let tmpDeviceIdentifier = Cookies.get("deviceIdentifier");
    let deviceIdentifier: string;

    if (typeof tmpDeviceIdentifier !== undefined) {
      deviceIdentifier = tmpDeviceIdentifier!;
    } else {
      deviceIdentifier = generateUUID();
      Cookies.set("deviceIdentifier", deviceIdentifier, {
        expires: 365,
        sameSite: "strict",
      });
    }

    return deviceIdentifier;
  }

  async function fetchDataFromSwaggerAPI(name: string, pass: string) {
    try {
      const Data: RequestBody = {
        email: name,
        password: pass,
        deviceID: deviceID,
      };

      let response = await fetch("http://192.168.68.59/api/Auth/Login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(Data),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch {
      console.log("HTTP Error");
    }
  }

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Account:", accountName);
    console.log("Password:", password);
    fetchDataFromSwaggerAPI(accountName, password);
  };
  return (
    <div className={styles.login_page_container}>
      <div className={styles.login_content_container}>
        <div className={styles.login_subcontent_container}>
          <div>
            <Typography variant="h2">Login</Typography>
            <Typography variant="h4">
              Sign in to your{" "}
              <span style={{ color: "var(--primary-color)" }}>admin</span>{" "}
              panel.
            </Typography>
          </div>

          <FancyHR />

          <form
            className={styles.login_subcontent_container}
            onSubmit={formSubmit}
          >
            <Input
              label="ACCOUNT NAME"
              variant="outlined"
              required
              onChange={(e) => setAccountName(e.target.value)}
            ></Input>
            <Input
              label="PASSWORD"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Input>

            <FancyHR />

            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
            >
              LOGIN
            </Button>
          </form>
        </div>

        <div className={styles.login_divider_container}></div>

        <div className={styles.login_logo_container}>
          <img src="/images/Title.png" alt="" className={styles.login_logo} />
        </div>
      </div>
    </div>
  );
}
