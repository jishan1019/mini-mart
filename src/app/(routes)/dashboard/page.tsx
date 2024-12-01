"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") as any);

    if (auth?.role) {
      router.push(`/dashboard/${auth.role}`);
    } else {
      router.push("/");
    }
  }, [router]);

  return <div>Loading...</div>;
};

export default Dashboard;
