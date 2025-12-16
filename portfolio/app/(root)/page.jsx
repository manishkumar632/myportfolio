import Header from "@/components/home/header";
import HeroSection from "@/components/home/heroSection";
import KicksStoreUI from "@/components/home/KicksStoreUI";
import App from "@/components/common/mobileMockup";

export default function Home() {
  return (
    <div>
      <Header />
      {/* hero section */}
      <HeroSection />
      <App />
    </div>
  );
}
