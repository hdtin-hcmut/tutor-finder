"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  async function handleSignup() {
    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Signup success");
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6">
          Signup
        </h1>

        <div className="space-y-4">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Button
            className="w-full"
            onClick={handleSignup}
          >
            Signup
          </Button>
        </div>
      </div>
    </main>
  );
}