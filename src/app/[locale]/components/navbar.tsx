"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTranslation } from "react-i18next";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation("Index");
  return (
    <>
      <nav className="text-center bg-gray-300 sticky p-4 top-0 z-50 flex justify-around">
        <div className="flex space-x-4">
          <Link
            href="/"
            className={
              pathname === "/en" || pathname === "/id"
                ? "text-blue-500 "
                : "text-white "
            }
          >
            {t("Home")}
          </Link>
          <Link
            href={"/en/products" || "/id/products"}
            className={
              pathname === "/en/products" || pathname === "/id/products"
                ? "text-blue-500 "
                : "text-white"
            }
          >
            {t("Products")}
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link
            href={"/en/signin" || "/id/signin"}
            className={
              pathname === "/en/signin" ? "text-blue-500" : "text-white"
            }
          >
            {t("Sign in")}
          </Link>
          <Link
            href={"/en/signup" || "/id/signup"}
            className={
              pathname === "/en/signup" ? "text-blue-500" : "text-white"
            }
          >
            {t("Sign up")}
          </Link>
        </div>
      </nav>
    </>
  );
}
