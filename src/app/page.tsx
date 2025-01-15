import Article from "./components/Article";
import Booking from "./components/Booking";
import ClientBar from "./components/ClientBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Innovation from "./components/Innovation";
import Spotlight from "./components/Spotlight";
import SuccessPage from "./components/SuccessPage";
import Testimonial from "./components/Testimonial";



export default function Home() {
  return (
    <div className="bg-[#030516]">
      <HomePage />
      <SuccessPage />
      <Testimonial />
      <Spotlight />
      <Innovation />
      <ClientBar />
      <Article />
      <Booking />
      <Footer />
    </div>
  );
}
