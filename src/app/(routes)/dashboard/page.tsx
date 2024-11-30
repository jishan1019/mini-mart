"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  const auth = JSON.parse(localStorage.getItem("auth") as any);

  useEffect(() => {
    if (auth?.role) {
      router.push(`/dashboard/${auth?.role}`);
    } else {
      router.push("/");
    }
  }, [auth?.role, router]);

  return <div></div>;
};

export default Dashboard;
