//Statisk site
import KeyWords from "@/components/KeyWords";
import PrimaryButton from "@/components/PrimaryButton";
import SingleViewHeader from "@/components/SingleViewHeader";

const singleView = () => {
  return (
    <div className="flex flex-col mx-4">
      <SingleViewHeader />
      <h1 className="text-3xl py-1">Samojed Willie</h1>
      <KeyWords />

      <p className="text-gray-500 py-1">
        Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde
        og er venlig over for andre dyr. På trods af sin hvide pels elsker den
        regn og vandpytter.
      </p>
      <p className="text-gray-400 text-sm py-1">Opdateret den 13. juli.</p>
      <PrimaryButton />
    </div>
  );
};

export default singleView;
