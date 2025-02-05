"use client";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import {useState} from "react"

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col justify-center items-center align-center min-w-screen min-h-screen">
      <h1 className="max-h-content">This is Next + Typescript template</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
