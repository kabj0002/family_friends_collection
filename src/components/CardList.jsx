//Noter: Her skal du mappe

import Card from "./Card";

const CardList = ({ data }) => {
  console.log(data);
  return (
    <ul className="grid grid-cols-2 mx-2 gap-4">
      {data.animals.map((animal) => (
        <Card key={animal.id} animal={animal} />
      ))}
    </ul>
  );
};

export default CardList;
