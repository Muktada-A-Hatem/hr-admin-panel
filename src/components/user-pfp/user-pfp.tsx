"use client";

import styles from "./user-pfp.module.css";

import React from "react";

interface UserPFPProps {
  roundness?: number;
  lineThickness?: number;
  image?: string;
}

const UserPFP: React.FC<UserPFPProps> = ({ roundness, lineThickness }) => {
  return (
    <div className={styles.pfp_container}>
      <img src="images/User.png" className={styles.pfp}></img>
    </div>
  );
};

export default UserPFP;
