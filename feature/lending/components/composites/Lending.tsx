import BusinessCreatorCards from './BusinessCreatorCards';
import CompanyCards from './CompanyCards';
import HeroSection from './HeroSection';

const Lending = () => {
  return (
    <div className="flex flex-col gap-[63px]">
      <HeroSection />
      <BusinessCreatorCards />
      <CompanyCards />
    </div>
  );
};

export default Lending;
