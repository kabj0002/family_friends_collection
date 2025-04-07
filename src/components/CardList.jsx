//Her skal du mappe
import Card from "./Card";

const CardList = () => {
  return (
    <div className="grid grid-cols-2 mx-2 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
