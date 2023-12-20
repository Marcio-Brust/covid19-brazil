"use client";
import { StateSelect } from "@/components/StateSelect";
import { Table } from "@/components/Table";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen gap-16">
      <Table />
      <StateSelect />
    </main>
  );
}
