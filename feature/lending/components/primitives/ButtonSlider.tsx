import { motion } from 'motion/react';
import { ButtonSliderProps } from '../../type';
const ButtonSlider = ({ active, setActive }: ButtonSliderProps) => {
  return (
    <div className="relative flex justify-between bg-[#00000014] px-[14px] py-[12px] rounded-[12px] w-full max-w-[1325px] min-h-[72px] overflow-hidden">
      <motion.div
        className="top-1/2 left-[14px] absolute rounded-[12px] w-1/2 h-[48px] -translate-y-1/2"
        animate={{ x: active === 'business' ? 0 : 'calc(100% - 28px)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 40 }}
        style={{
          background:
            'linear-gradient(90deg, rgba(48,18,179,1) 0%, rgba(123,98,232,1) 100%)',
        }}
      />
      <button
        className={`flex justify-center relative z-[10] items-center rounded-[12px] ${
          active === 'business' ? 'text-[#FFFFFF]' : 'text-[#3012B3CC]'
        } w-1/2 font-bold  cursor-pointer`}
        onClick={() => setActive('business')}
      >
        ბიზნესი
      </button>
      <button
        className={`flex justify-center relative z-[10] items-center rounded-[12px] ${
          active === 'creator' ? 'text-[#FFFFFF]' : 'text-[#3012B3CC]'
        } w-1/2 font-bold  cursor-pointer`}
        onClick={() => setActive('creator')}
      >
        შემქმნელი
      </button>
    </div>
  );
};

export default ButtonSlider;
