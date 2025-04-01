import { LoginForm } from "@/components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Exchange.Art",
  description: "Login to your Exchange.Art account",
};

export default function LoginPage() {
  return (
    <div className="container py-20">
      <div className="max-w-md mx-auto">
          <LoginForm />
      </div>
    </div>
  );
}
