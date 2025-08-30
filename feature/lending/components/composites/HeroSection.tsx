import CompanyStats from '../primitives/CompanyStats';
import Header from '../primitives/Header';

const HeroSection = () => {
  return (
    <div
      className="m-auto mt-[12px] p-[17px] rounded-[60px] w-full max-w-[1420px] min-h-[651px]"
      style={{
        background:
          'linear-gradient(270deg, rgba(176, 157, 255, 0.82) -29.82%, rgba(47, 22, 151, 0.82) 61.02%)',
      }}
    >
      <div className="flex flex-col items-center">
        <Header />
        <div className="space-y-[20px] mt-[45px] w-full max-w-[1288px]">
          <p className="max-w-[571px] font-medium text-[35px] text-white leading-11">
            პლათფორმა, რომელიც აკავშირებს ბრენდებს და UGC კონტენტის შემქმნელებს
          </p>
          <p className="max-w-[571px] font-medium text-[#B3B3B3]">
            პლათფორმა, სადაც ბიზნესები ქმნიან კამპანიებს, ხოლო კონტენტ
            კრეატორებს შეუძლიათ გამოიმუშაონ ფული კამპანიებზე შექმნილი კონტენტის
            პერფორმანსის შესაბამისად
          </p>
        </div>
        <CompanyStats />
      </div>
    </div>
  );
};

export default HeroSection;
