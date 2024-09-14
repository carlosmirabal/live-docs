import { SignUp } from "@clerk/nextjs";
import React from "react";

const SingUpPage = () => {
  return (
    <main className="auth-page">
      <SignUp />
    </main>
  );
};

export default SingUpPage;
