// src/app/[locale]/page.tsx
"use client";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation("Index");

  return (
    <div>
      <h1 className="text-2xl text-black text-center p-4">{t("title")}</h1>
    </div>
  );
}
