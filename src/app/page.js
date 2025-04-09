import Image from "next/image";
import FilterMenu from "@/components/FilterMenu";
import Navigation from "@/components/Navigation";
import CardList from "@/components/CardList";

//Listview
export default async function Home() {
  const data = await fetch("https://api.petfinder.com/v2/animals", {
    headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
  });
  const animals = await data.json();
  console.log(animals);
  return (
    <div className="mx-2">
      <FilterMenu />
      <div className="flex flex-col mx-2 jusitfy-center">
        <CardList data={animals} />
        <Navigation />
      </div>
    </div>
  );
}
