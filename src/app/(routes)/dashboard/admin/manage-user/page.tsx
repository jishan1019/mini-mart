"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Ban, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  isBanned: boolean;
}

export default function ManageUserTable() {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      role: "Employee",
      isBanned: false,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1987654321",
      role: "Manager",
      isBanned: true,
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "+1122334455",
      role: "Employee",
      isBanned: false,
    },
    {
      id: "4",
      name: "Zampa",
      email: "zampa@example.com",
      phone: "+1125869855",
      role: "Manager",
      isBanned: false,
    },
    {
      id: "5",
      name: "Atif Aslam",
      email: "atif@example.com",
      phone: "+1582588828",
      role: "Employee",
      isBanned: false,
    },
  ]);

  const handleBanToggle = (userId: string) => {
    const userToUpdate = users.find((user) => user.id === userId) as any;

    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, isBanned: !user.isBanned } : user
      )
    );

    // Show toast based on the current state of `isBanned`
    toast.success(
      !userToUpdate.isBanned
        ? "User is banned successfully"
        : "User is unbanned successfully"
    );
  };

  const handleDelete = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));
    toast.success("User is deleted successfully");
  };

  return (
    <div className=" w-full h-full mx-auto ">
      <div className="container mx-auto p-4 bg-white shadow rounded-md border mt-10">
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant={user.isBanned ? "destructive" : "secondary"}
                        size="sm"
                        onClick={() => handleBanToggle(user.id)}
                      >
                        <Ban className="w-4 h-4 mr-2" />
                        {user.isBanned ? "Unban" : "Ban"}
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
