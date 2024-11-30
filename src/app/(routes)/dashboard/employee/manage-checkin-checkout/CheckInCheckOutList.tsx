"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

interface CheckRecord {
  date: Date;
  checkIn: Date;
  checkOut: Date | null;
}

export default function CheckInCheckOutList() {
  const [records, setRecords] = useState<CheckRecord[]>([]);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleCheckInOut = () => {
    const now = new Date();
    if (!isCheckedIn) {
      // Check-in
      setRecords([
        {
          date: now,
          checkIn: now,
          checkOut: null,
        },
        ...records,
      ]);
      setIsCheckedIn(true);
    } else {
      // Check-out
      setRecords(
        records.map((record, index) =>
          index === 0 ? { ...record, checkOut: now } : record
        )
      );
      setIsCheckedIn(false);
    }
  };

  return (
    <div className="space-y-4 shadow bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Check-in/Checkout List</h2>
        <Button onClick={handleCheckInOut}>
          {isCheckedIn ? "Check Out" : "Check In"}
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Check-in Time</TableHead>
            <TableHead>Check-out Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record, index) => (
            <TableRow key={index}>
              <TableCell>John Doe</TableCell>
              <TableCell>{format(record.date, "yyyy-MM-dd")}</TableCell>
              <TableCell>{format(record.checkIn, "HH:mm:ss")}</TableCell>
              <TableCell>
                {record.checkOut ? format(record.checkOut, "HH:mm:ss") : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
