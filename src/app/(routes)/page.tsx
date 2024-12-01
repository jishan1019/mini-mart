"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Lock, Mail } from "lucide-react";
import { toast } from "sonner";
import { Config } from "@/config";
import { USER_ROLE } from "@/config/site-config";
import { useRouter } from "next/navigation";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const email = formData.email;
    const password = formData.password;

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
    }

    if (email == Config.adminEmail && password == Config.password) {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          role: USER_ROLE.ADMIN,
          email,
        })
      );
      router.push(`/dashboard/${USER_ROLE.ADMIN}`);
      toast.success("Login Success");
    } else if (email == Config.managerEmail && password == Config.password) {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          role: USER_ROLE.MANAGER,
          email,
        })
      );
      router.push(`/dashboard/${USER_ROLE.MANAGER}`);
      toast.success("Login Success");
    } else if (email == Config.employeeEmail && password == Config.password) {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          role: USER_ROLE.EMPLOYEE,
          email,
        })
      );

      router.push(`/dashboard/${USER_ROLE.EMPLOYEE}`);
      toast.success("Login Success");
    } else {
      toast.error("Credential mismatch");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-white p-4">
      <div className="w-full max-w-md space-y-8 animate-in">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Mini Market Management
          </h1>
          <p className="text-muted-foreground">
            Sign in to access your dashboard
          </p>
        </div>

        <Card className="p-6 glass-morphism">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    disabled={isLoading}
                    className="pl-10"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Signing in...
                </div>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          By signing in, you agree to our{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Index;
