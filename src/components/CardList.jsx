//Noter: Her skal du mappe

import Card from "./Card";

const CardList = ({ data }) => {
  console.log(data);
  return (
    <ul className="columns-2 gap-4 m-4">
      {data.animals.map((animal) => (
        <Card key={animal.id} animal={animal} />
      ))}
    </ul>
  );
};

export default CardList;
