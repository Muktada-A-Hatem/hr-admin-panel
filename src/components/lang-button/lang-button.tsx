"use client";

import { useTranslation } from "react-i18next";
import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React, { ChangeEvent, useEffect } from "react";
import { Select } from "@mui/material";

const LangButton = () => {
  const { i18n, t } = useTranslation();

  function handleLangChange(event: SelectChangeEvent) {
    if (i18n.language !== event.target.value) {
      i18n.changeLanguage(event.target.value);
    }
  }

  return (
    <FormControl>
      <InputLabel>Language</InputLabel>
      <Select
        value={i18n.language}
        label="Language"
        onChange={handleLangChange}
        autoWidth
      >
        <MenuItem value={"en"}>{t("lang-button.english")}</MenuItem>
        <MenuItem value={"ar"}>{t("lang-button.arabic")}</MenuItem>
        <MenuItem value={"jp"}>{t("lang-button.japanese")}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LangButton;
