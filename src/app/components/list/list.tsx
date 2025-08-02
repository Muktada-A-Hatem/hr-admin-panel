import React from "react";
import styles from "./list.module.css";

interface listProps {
  Title: string;
  Type: "emp" | "req" | "cer" | "rms";
  Variant: "full" | "shrunken";
}

const list: React.FC<listProps> = ({ Title, Type, Variant }) => {
  return <div className={styles.list_container}></div>;
};
