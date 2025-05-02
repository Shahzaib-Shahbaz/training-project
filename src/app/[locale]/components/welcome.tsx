import { useTranslations } from "next-intl";
export default function Welcome() {
  const t = useTranslations("Index");
  return (
    <div>
      <h1 className="text-center text-2xl p-4 bg-gray-100">{t("title")}</h1>
    </div>
  );
}
