import { RegisterForm } from "@/components/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Exchange.Art",
  description: "Create a new account on Exchange.Art",
};

export default function RegisterPage() {
  return (
    <div className="container py-20">
      <div className="max-w-md mx-auto">
        <RegisterForm />
      </div>
    </div>
  );
}
