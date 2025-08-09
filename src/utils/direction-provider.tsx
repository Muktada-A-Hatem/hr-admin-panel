"use client";

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function DirectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "ar" ? "rtl" : "ltr"
    );
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  return <>{children}</>;
}
