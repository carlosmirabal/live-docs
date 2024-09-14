import { SignIn } from "@clerk/nextjs";
import React from "react";

const SingInPage = () => {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
};

export default SingInPage;
