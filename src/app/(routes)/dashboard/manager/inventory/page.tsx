"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { AlertCircle, Plus, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface InventoryItem {
  id: number;
  name: string;
  currentStock: number;
  minimumStock: number;
  lastUpdated: string;
  status: "OK" | "LOW" | "OUT";
}

const mockInventory: InventoryItem[] = [
  {
    id: 1,
    name: "Rice (5kg)",
    currentStock: 15,
    minimumStock: 20,
    lastUpdated: "2024-02-20",
    status: "LOW",
  },
  {
    id: 2,
    name: "Cooking Oil (1L)",
    currentStock: 45,
    minimumStock: 30,
    lastUpdated: "2024-02-20",
    status: "OK",
  },
  {
    id: 3,
    name: "Milk (1L)",
    currentStock: 0,
    minimumStock: 10,
    lastUpdated: "2024-02-20",
    status: "OUT",
  },
  {
    id: 4,
    name: "Sugar (2kg)",
    currentStock: 25,
    minimumStock: 20,
    lastUpdated: "2024-02-19",
    status: "OK",
  },
  {
    id: 5,
    name: "Wheat Flour (10kg)",
    currentStock: 8,
    minimumStock: 15,
    lastUpdated: "2024-02-18",
    status: "LOW",
  },
  {
    id: 6,
    name: "Eggs (Dozen)",
    currentStock: 3,
    minimumStock: 10,
    lastUpdated: "2024-02-20",
    status: "OUT",
  },
  {
    id: 7,
    name: "Salt (1kg)",
    currentStock: 50,
    minimumStock: 25,
    lastUpdated: "2024-02-19",
    status: "OK",
  },
  {
    id: 8,
    name: "Butter (500g)",
    currentStock: 5,
    minimumStock: 10,
    lastUpdated: "2024-02-20",
    status: "LOW",
  },
  {
    id: 9,
    name: "Tea (250g)",
    currentStock: 30,
    minimumStock: 20,
    lastUpdated: "2024-02-19",
    status: "OK",
  },
  {
    id: 10,
    name: "Coffee (100g)",
    currentStock: 12,
    minimumStock: 15,
    lastUpdated: "2024-02-20",
    status: "LOW",
  },
  {
    id: 11,
    name: "Tomato Ketchup (500g)",
    currentStock: 18,
    minimumStock: 10,
    lastUpdated: "2024-02-18",
    status: "OK",
  },
  {
    id: 12,
    name: "Dishwashing Liquid (1L)",
    currentStock: 7,
    minimumStock: 10,
    lastUpdated: "2024-02-19",
    status: "LOW",
  },
  {
    id: 13,
    name: "Toilet Paper (Roll)",
    currentStock: 40,
    minimumStock: 30,
    lastUpdated: "2024-02-20",
    status: "OK",
  },
];

const InventoryManagement = () => {
  const [inventory] = useState<InventoryItem[]>(mockInventory);

  const handleStockAdjustment = (itemId: number, type: "add" | "remove") => {
    toast.success(
      `Stock has been ${
        type === "add" ? "increased" : "decreased"
      } successfully.`
    );
  };

  const getStatusColor = (status: InventoryItem["status"]) => {
    switch (status) {
      case "OK":
        return "text-green-600";
      case "LOW":
        return "text-yellow-600";
      case "OUT":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="w-full h-full mx-auto bg-[#F3F4F6]">
      <div className="flex-1 p-8 overflow-auto bg-[#F3F4F6]">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Inventory Management</CardTitle>
                {/* <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Item
                </Button> */}
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item Name</TableHead>
                      <TableHead>Current Stock</TableHead>
                      <TableHead>Minimum Stock</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.currentStock}</TableCell>
                        <TableCell>{item.minimumStock}</TableCell>
                        <TableCell>
                          <span
                            className={`font-medium ${getStatusColor(
                              item.status
                            )}`}
                          >
                            {item.status}
                          </span>
                        </TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleStockAdjustment(item.id, "add")
                              }
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleStockAdjustment(item.id, "remove")
                              }
                            >
                              <RefreshCw className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-yellow-500" />
                Low Stock Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inventory
                  .filter(
                    (item) => item.status === "LOW" || item.status === "OUT"
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className={`p-4 rounded-lg border ${
                        item.status === "OUT" ? "bg-red-50" : "bg-yellow-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">
                            Current Stock: {item.currentStock} | Minimum
                            Required: {item.minimumStock}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Reorder
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
