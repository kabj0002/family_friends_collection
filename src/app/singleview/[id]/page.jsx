//dynamisk site (work in progress)
import KeyWords from "@/components/KeyWords";
import PrimaryButton from "@/components/PrimaryButton";
import SingleViewHeader from "@/components/SingleViewHeader";

export default async function singleView({ params }) {
  //   const { id } = await params;
  const { id } = params;
  const res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch animal data");
  }

  const { animal } = await res.json();
  const imageUrl = animal.photos?.[0]?.medium || "/img/placeholder.jpg";

  return (
    <div className="flex flex-col mx-4">
      <SingleViewHeader image={imageUrl} breed={animal.breeds.primary} />
      <h1 className="text-3xl py-1">{animal.name}</h1>
      <div className="flex gap-2 mt-3 mb-3">
        <KeyWords>{animal.type}</KeyWords>
        <KeyWords>{animal.gender}</KeyWords>
        <KeyWords>{animal.age}</KeyWords>
        <KeyWords>{animal.breeds.primary}</KeyWords>
        {/* variant="blue"
        variant="pink"
        variant="green"
        variant="yellow" */}
      </div>
      <p className="text-gray-500 py-1">{animal.description}</p>
      <p className="text-gray-400 text-sm py-1">
        Opdateret den{" "}
        {new Date(animal.status_changed_at).toLocaleDateString("da-DK")}
      </p>
      <PrimaryButton />
    </div>
  );
}

// const singleView = async ({ params }) => {
//   const { id } = await params;

//   return (
//     <div className="flex flex-col mx-4">
//       <SingleViewHeader />
//       <h1 className="text-3xl py-1">{animal.name}</h1>
//       <KeyWords />

//       <p className="text-gray-500 py-1">{animal.description}</p>
//       <p className="text-gray-400 text-sm py-1">Opdateret den 13. juli.</p>
//       <PrimaryButton />
//     </div>
//   );
// };

// export default singleView;
