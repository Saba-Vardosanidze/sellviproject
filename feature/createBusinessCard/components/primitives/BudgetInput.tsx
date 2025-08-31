import Image from 'next/image';
import { FormComponentProps } from '../../type';

const BudgetInput = ({ register, error }: FormComponentProps) => (
  <div className="flex flex-col gap-[5px] w-1/2">
    <label htmlFor="budget" className="text-[18px]">
      ბიუჯეტი (ლარში)
    </label>
    <div className="relative flex flex-col gap-[5px]">
      <input
        className="py-[17px] pr-[18px] pl-[48px] rounded-[8px] outline outline-[#E3E8EF] focus:outline-[#3012B3CC] w-full"
        type="number"
        placeholder="5000"
        id="budget"
        {...register}
      />
      <Image
        src="images/svg/lari.svg"
        alt="lariPhoto"
        width={20}
        height={20}
        className="top-[18px] left-[18px] absolute"
      />
      {error && <p className="ml-[10px] text-[12px] text-red-500">{error}</p>}
    </div>
  </div>
);

export default BudgetInput;
