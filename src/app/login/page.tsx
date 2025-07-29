"use client";

import Input from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FancyHR from "./../components/fancy-hr/fancy-hr";
import styles from "./login.module.css";

import { useState } from "react";
import { Typography } from "@mui/material";

export default function Login() {
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Account:", accountName);
    console.log("Password:", password);
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
          <img
            src="/image   s/Fake_Title.png"
            alt=""
            className={styles.login_logo}
          />
        </div>
      </div>
    </div>
  );
}
