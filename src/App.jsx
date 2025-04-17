import "./App.css";
import LocationAmenities from "./components/LocationAmenities";
import CoworkingSection from "./components/CoworkingSection";
import VibrantCommunity from "./components/VibrantCommunity";
import Amenities from "./components/Amenities";
import Pricing from "./components/Pricing";
import Equipments from "./components/Equipments";
import Ergonomic from "./components/Ergonomic";
import Recreational from "./components/Recreational";
import OpeningHoursContact from "./components/OpeningHoursContact";

function App() {
  return (
    <>
      <CoworkingSection />
      <br />
      <LocationAmenities />
      <br />
      <VibrantCommunity />
      <br />
      <Amenities />
      <br />
      <Pricing />
      <br />
      <Equipments />
      <br />
      <Ergonomic />
      <br />
      <Recreational />
      <br />
      <OpeningHoursContact />
    </>
  );
}

export default App;
