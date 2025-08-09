import React from "react";
import styles from "./userpanel.module.css";

import { Button, Typography } from "@mui/material";

import FancyHR from "@/components/fancy-hr/fancy-hr";
import PFP from "@/components/user-pfp/user-pfp";
import InfoBox from "@/components/information-box/information-box";
import SkillBox from "@/components/skill-box/skill-box";

const UserPanel = () => {
  const info = [
    ["NAME", "Muqtada Abdulrasool"],
    ["EMAIL", "Muqtada@gmail.com"],
    ["PHONE NUMBER", "07708415865"],
    ["DATE OF EMPLOYMENT", "22/4/2023"],
    ["POSITION", "Front-End Dev"],
  ];

  return (
    <div className={styles.user_panel}>
      <div className={styles.user_scroll_panel}>
        <PFP roundness="10%" size="12rem" image="/images/User.png"></PFP>
        <FancyHR></FancyHR>
        <InfoBox info={info}></InfoBox>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              height: "2rem",
              width: "70%",
              borderEndStartRadius: "15px",
            }}
          >
            <Typography
              variant="subtitle1"
              color="var(--mui-palette-primary-contrastText)"
            >
              Edit Profile
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              height: "2rem",
              width: "30%",
              borderEndEndRadius: "15px",
            }}
          >
            <Typography
              variant="subtitle1"
              color="var(--mui-palette-primary-contrastText)"
            >
              Delete
            </Typography>
          </Button>
        </div>
        <SkillBox
          title="Skills"
          skills={[
            { name: "Front-End", level: 80 },
            { name: "C++", level: 40 },
            { name: "Python", level: 14 },
            { name: "Back-End", level: 6 },
            { name: "Design", level: 3 },
            { name: "Front-End", level: 80 },
            { name: "C++", level: 40 },
            { name: "Python", level: 14 },
            { name: "Back-End", level: 6 },
            { name: "Design", level: 3 },
            { name: "Front-End", level: 80 },
            { name: "C++", level: 40 },
            { name: "Python", level: 14 },
            { name: "Back-End", level: 6 },
            { name: "Design", level: 3 },
            { name: "Front-End", level: 80 },
            { name: "C++", level: 40 },
            { name: "Python", level: 14 },
            { name: "Back-End", level: 6 },
            { name: "Design", level: 3 },
            { name: "Front-End", level: 80 },
            { name: "C++", level: 40 },
            { name: "Python", level: 14 },
            { name: "Back-End", level: 6 },
            { name: "Design", level: 3 },
            { name: "Front-End", level: 80 },
            { name: "C++", level: 40 },
            { name: "Python", level: 14 },
            { name: "Back-End", level: 6 },
            { name: "Design", level: 3 },
          ]}
        ></SkillBox>
      </div>
    </div>
  );
};

export default UserPanel;
