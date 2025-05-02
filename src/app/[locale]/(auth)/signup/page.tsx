"use client";
import Auth from "@/app/class/auth";
import AuthForm from "../../components/authform";

export default function Signup() {
  return (
    <>
      <AuthForm
        ButtonText="Sign up"
        Header="Sign up"
        mutationFn={Auth.Signup}
      />
    </>
  );
}
