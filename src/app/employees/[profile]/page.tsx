"use client";

import React from "react";
import styles from "./profile.module.css";

import NavSidebar from "@/components/navigation-sidebar/navSidebar";
import Header from "@/components/header/header";
import UserPanel from "@/components/user-panel/user-panel";
import { Box, Tabs, Tab } from "@mui/material";
import FancyHR from "@/components/fancy-hr/fancy-hr";

export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="home_page_container">
      <NavSidebar index={-1}></NavSidebar>
      <div className="home_content_container">
        <Header Title="Meow"></Header>
        <div className={styles.content_container}>
          <UserPanel></UserPanel>
          <div className={styles.tables_container}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              variant="fullWidth"
            >
              <Tab label="CERTIFICATES " sx={{ fontSize: "1rem" }} />
              <Tab label="REQUESTS" sx={{ fontSize: "1rem" }} />
              <Tab label="ROADMAPS" sx={{ fontSize: "1rem" }} />
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
