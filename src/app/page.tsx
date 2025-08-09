"use client";

import { AuthProvider, useAuthContext } from "@/utils/auth-context";

import Sidebar from "../components/navigation-sidebar/navSidebar";
import Header from "../components/header/header";
import List from "../components/list/list";

import styles from "./home.module.css";
import { use, useContext, useEffect } from "react";

async function test() {
  const currentContext = useAuthContext();
  const newJWT = await currentContext?.fetchNewJwt;
}
export default function Home() {
  // useEffect(() => {
  // require("dotenv").config();
  // });
  useEffect(() => {
    test();
  });

  return (
    <div className={styles.home_page_container}>
      <Sidebar index={0}></Sidebar>
      <div className={styles.home_content_container}>
        <Header Title="Muqtada Abdulrasool"></Header>
        <div className={styles.content_container}></div>
      </div>
    </div>
  );
}
