"use client";
import { StateSelect } from "@/components/StateSelect";
import { Table } from "@/components/Table";

export default function Home() {
  return (
    <main className="flex justify-evenly">
      <Table />
      <StateSelect />
    </main>
  );
}
