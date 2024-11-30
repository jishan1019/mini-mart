"use client";

import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "./(share)/StatCard";
import SalesChart from "./(share)/SalesChart";

const Dashboard = () => {
  const customerFeedback = [
    {
      id: 1,
      name: "Sarah Johnson",
      feedback:
        "The inventory management system is fantastic! It helps me keep track of my stock effortlessly.",
    },
    {
      id: 2,
      name: "Michael Chen",
      feedback:
        "Quick delivery and excellent product quality. The customer service team was very helpful.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      feedback:
        "Love the new mobile app interface! Makes ordering supplies so much easier on the go.",
    },
  ];

  return (
    <div>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Dashboard Overview
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Total Sales"
              value="$24,780"
              icon={<DollarSign className="w-6 h-6" />}
              trend="+12.5% from last month"
              trendDirection="up"
            />
            <StatCard
              title="Total Products"
              value="1,240"
              icon={<Package className="w-6 h-6" />}
              trend="+8 new products"
              trendDirection="up"
            />
            <StatCard
              title="Low Stock Products"
              value="88"
              icon={<Package className="w-6 h-6" />}
              trend="-8 products"
              trendDirection="up"
            />
            <StatCard
              title="Total Orders"
              value="356"
              icon={<ShoppingCart className="w-6 h-6" />}
              trend="+23.5% from last month"
              trendDirection="up"
            />
            <StatCard
              title="Total Customers"
              value="890"
              icon={<Users className="w-6 h-6" />}
              trend="+15 new customers"
              trendDirection="up"
            />

            <StatCard
              title="Total Employee"
              value="10"
              icon={<Users className="w-6 h-6" />}
              trend="+2 new employee"
              trendDirection="up"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SalesChart />

            <Card>
              <CardHeader>
                <CardTitle>Customer Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerFeedback.map((customer) => (
                    <div
                      key={customer.id}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-200" />
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-sm text-gray-500">
                          {customer.feedback}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
