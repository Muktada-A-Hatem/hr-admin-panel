import styles from "./home.module.css";
import Sidebar from "./components/navigation-sidebar/navSidebar";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className={styles.home_page_container}>
      <Sidebar></Sidebar>
      <div
        style={{
          padding: "2rem",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header Title="Muqtada Abdulrasool"></Header>
      </div>
    </div>
  );
}
