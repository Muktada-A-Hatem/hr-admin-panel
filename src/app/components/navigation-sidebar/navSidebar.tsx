"use client";

import styles from "./navSidebar.module.css";
import { BottomPanel, ShrunkenBottomPanel } from "./navBottomPanel";
import FancyHR from "../fancy-hr/fancy-hr";

import React from "react";

import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";

import BarChart from "@mui/icons-material/BarChart";
import Email from "@mui/icons-material/Email";
import People from "@mui/icons-material/PeopleAlt";
import Certificates from "@mui/icons-material/WorkspacePremium";
import Roadmaps from "@mui/icons-material/AddRoad";

export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [Shrunken, setShrunken] = React.useState(false);
  const [Locked, setLocked] = React.useState(true);

  React.useEffect(() => {
    const NavElemant = document.getElementById("navSidebar");
    if (NavElemant) {
      NavElemant.addEventListener("mouseenter", (event) => {
        if (window.innerWidth > 600) {
          NavElemant.classList.add("expand");
          setShrunken(true);
        }
      });
      NavElemant.addEventListener("mouseleave", (event) => {
        // console.log("Mouse left parent or its child:", event.target);
        NavElemant.classList.remove("expand");
        setShrunken(false);
      });

      if (typeof window !== undefined) {
        function handleResize() {
          if (window.innerWidth < 600) {
            setLocked(false);
            setShrunken(false);
          } else {
            setShrunken(true);
          }
        }
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }
  });

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const handleLockClick = () => {
    setLocked(!Locked);
  };

  return (
    <div
      className={styles.navSidebar_container}
      id="navSidebar"
      style={Locked ? { width: "20rem" } : { width: "" }}
    >
      <img src="/images/Title.png" className={styles.navLogo}></img>
      <FancyHR></FancyHR>
      <nav aria-label="main mailbox folders" style={{ width: "100%" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Requests" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <Certificates />
              </ListItemIcon>
              <ListItemText primary="Certificates" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <Roadmaps />
              </ListItemIcon>
              <ListItemText primary="Roadmaps" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <div style={{ width: "100%", height: "100%" }}></div>
      <FancyHR></FancyHR>
      {Locked ? (
        <BottomPanel
          isShrunken={Shrunken}
          isLocked={Locked}
          handleLockClick={handleLockClick}
          styles={styles}
        />
      ) : Shrunken ? (
        <BottomPanel
          isShrunken={Shrunken}
          isLocked={Locked}
          handleLockClick={handleLockClick}
          styles={styles}
        />
      ) : (
        <ShrunkenBottomPanel
          isShrunken={Shrunken}
          isLocked={Locked}
          handleLockClick={handleLockClick}
          styles={styles}
        />
      )}
    </div>
  );
}
