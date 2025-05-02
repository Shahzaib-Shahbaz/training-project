"use client";
import Auth from "@/app/class/auth";
import AuthForm from "../../components/authform";

export default function Login() {
  return (
    <>
      <AuthForm ButtonText="Login" Header="Login" mutationFn={Auth.Signin} />
    </>
  );
}
