"use client";
import FilterMenu from "@/components/FilterMenu";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import CardList from "@/components/CardList";

//Listview
export default function Home() {
  return (
    <div className="flex flex-col mx-2 jusitfy-center">
      <FilterMenu />
      <CardList />
      <Navigation />
    </div>
  );
}
