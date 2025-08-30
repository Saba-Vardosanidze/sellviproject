import Header from '../primitives/Header';

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center m-auto mt-[12px] p-[17px] rounded-[60px] w-full max-w-[1420px] min-h-[651px]"
      style={{
        background:
          'linear-gradient(270deg, rgba(176, 157, 255, 0.82) -29.82%, rgba(47, 22, 151, 0.82) 61.02%)',
      }}
    >
      <Header />
    </div>
  );
};

export default HeroSection;
