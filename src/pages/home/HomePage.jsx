import HeroSection from "./components/HeroSection/HeroSection";
import SearchSection from "./components/SearchSection/SearchSection";
import CategorySection from "./components/CategorySection/CategorySection";
import NearbySection from "./components/NearbySection/NearbySection";
import WomenFriendlySection from "./components/WomenFriendlySection/WomenFriendlySection";
import BudgetSection from "./components/BudgetSection/BudgetSection";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <CategorySection />
      <NearbySection />
      <WomenFriendlySection />
      <BudgetSection />
      <BenefitsSection />
    </>
  );
}

export default HomePage;
