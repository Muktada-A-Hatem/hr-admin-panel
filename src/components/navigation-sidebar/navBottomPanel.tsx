import { Typography } from "@mui/material";
import React from "react";
import { useTranslation, UseTranslation } from "next-i18next";

import Power from "@mui/icons-material/PowerSettingsNew";
import Gear from "@mui/icons-material/Settings";
import Unlock from "@mui/icons-material/LockOpen";
import Lock from "@mui/icons-material/Lock";

interface BottomPanelProps {
  isShrunken: boolean;
  isLocked: boolean;
  handleLockClick: any;
  styles: any;
}

export const BottomPanel: React.FC<BottomPanelProps> = ({
  isShrunken,
  isLocked,
  handleLockClick,
  styles,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.naviBottomPanel}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          className={styles.button}
          style={{
            background: "var(--nice-red)",
            borderTopLeftRadius: "2.25rem",
            borderBottomLeftRadius: "2.25rem",
          }}
          onClick={() => {
            open("/login");
          }}
        >
          <Power sx={{ fontSize: "1.5rem" }} />
        </button>
        <button
          className={styles.button}
          style={{
            background: "var(--secondary-color)",
            borderTopRightRadius: "2.25rem",
            borderBottomRightRadius: "2.25rem",
          }}
        >
          <Typography variant="h6" color="white">
            {t("navbar.settings")}
          </Typography>
          <Gear sx={{ fontSize: "1.5rem" }} />
        </button>
      </div>
      <button
        className={styles.button}
        style={{
          background: "var(--nice-blue)",
          borderRadius: "2.25rem",
        }}
        onClick={handleLockClick}
      >
        {isLocked ? (
          <Lock sx={{ fontSize: "1.5rem" }} />
        ) : (
          <Unlock sx={{ fontSize: "1.5rem" }} />
        )}
      </button>
    </div>
  );
};

export const ShrunkenBottomPanel: React.FC<BottomPanelProps> = ({
  isShrunken,
  isLocked,
  handleLockClick,
  styles,
}) => {
  return (
    <div className={styles.naviBottomPanelShrunken}>
      <button
        className={styles.button}
        style={{
          background: "var(--secondary-color)",
          borderRadius: "2.25rem",
        }}
      >
        <Gear sx={{ fontSize: "1.5rem" }} />
      </button>
      <button
        className={styles.button}
        style={{
          background: "var(--nice-red)",
          borderRadius: "2.25rem",
        }}
        onClick={() => {
          open("/login");
        }}
      >
        <Power sx={{ fontSize: "1.5rem" }} />
      </button>
    </div>
  );
};
