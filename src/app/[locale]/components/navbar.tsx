"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
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
            Home
          </Link>
          <Link
            href={"/en/products" || "/id/products"}
            className={
              pathname === "/en/products" || pathname === "/id/products"
                ? "text-blue-500 "
                : "text-white"
            }
          >
            Products
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link
            href={"/en/signin" || "/id/signin"}
            className={
              pathname === "/en/signin" ? "text-blue-500" : "text-white"
            }
          >
            Sign in
          </Link>
          <Link
            href={"/en/signup" || "/id/signup"}
            className={
              pathname === "/en/signup" ? "text-blue-500" : "text-white"
            }
          >
            Sign up
          </Link>
        </div>
      </nav>
    </>
  );
}
