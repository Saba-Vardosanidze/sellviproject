import BusinessCreatorCards from './BusinessCreatorCards';
import CompanyCards from './CompanyCards';
import HeroSection from './HeroSection';

const Lending = () => {
  return (
    <div className="flex flex-col gap-[63px] pb-[12px]">
      <div className="px-[10px]">
        <HeroSection />
      </div>
      <BusinessCreatorCards />
      <CompanyCards />
    </div>
  );
};

export default Lending;
