import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import MenuPage from "./menu/page";

export default function Home() {
  return (
      <main>
        <Slider />
        <Featured />
        <Offer />
        <MenuPage />
      </main>
  );
}
