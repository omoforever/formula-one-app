'use client'
import React from "react";
import getJolpicaDrivers from "@/api/getJolpicaDrivers";

export default function Home() {
  React.useEffect(() => {
    getJolpicaDrivers(2024)
  }, []);



  return (
    <>
      <h1>F1 Holographic Cards App</h1>
    </>
  );
}
