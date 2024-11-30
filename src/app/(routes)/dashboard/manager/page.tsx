"use client";

import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "../admin/(share)/StatCard";
import SalesChart from "../admin/(share)/SalesChart";

const Manager = () => {
  const employeeMessages = [
    {
      id: 1,
      name: "John Doe",
      message:
        "We need to restock on high-demand items like fresh produce and dairy. Customers have been asking about shortages.",
    },
    {
      id: 2,
      name: "Emily Carter",
      message:
        "The checkout counters are facing some technical issues during peak hours. Can we have them inspected?",
    },
    {
      id: 3,
      name: "Mark Patel",
      message:
        "The new shelving layout is great, but some customers are finding it hard to locate specific products. Could we add better signage?",
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
              title="Today Sales"
              value="$700"
              icon={<DollarSign className="w-6 h-6" />}
              trend="+12.5% from last day"
              trendDirection="up"
            />
            <StatCard
              title="Total Sales"
              value="$12,780"
              icon={<DollarSign className="w-6 h-6" />}
              trend="+12.5% from last month"
              trendDirection="up"
            />
            <StatCard
              title="Total Products"
              value="300"
              icon={<Package className="w-6 h-6" />}
              trend="+5 new products"
              trendDirection="up"
            />
            <StatCard
              title="Inventory"
              value="150"
              icon={<Package className="w-6 h-6" />}
              trend="+7 new products"
              trendDirection="up"
            />
            <StatCard
              title="Low Stock Products"
              value="12"
              icon={<Package className="w-6 h-6" />}
              trend="-3 products"
              trendDirection="down"
            />

            <StatCard
              title="Today Sell Customers"
              value="30"
              icon={<Users className="w-6 h-6" />}
              trend="+10 new customers"
              trendDirection="up"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SalesChart />

            <Card>
              <CardHeader>
                <CardTitle>Employee Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {employeeMessages.map((customer) => (
                    <div
                      key={customer.id}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-200" />
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-sm text-gray-500">
                          {customer.message}
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

export default Manager;
