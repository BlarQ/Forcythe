import ClientBar from "./components/ClientBar";
import HomePage from "./components/HomePage";
import Innovation from "./components/Innovation";
import Spotlight from "./components/Spotlight";
import SuccessPage from "./components/SuccessPage";
import Testimonial from "./components/Testimonial";



export default function Home() {
  return (
    <div className="min-h-[900vh] bg-[#030516]">
      <HomePage />
      <SuccessPage />
      <Testimonial />
      <Spotlight />
      <Innovation />
      <ClientBar />
    </div>
  );
}
