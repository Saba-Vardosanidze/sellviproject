import Image from 'next/image';
import { FormComponentProps } from '../../type';

const TagInput = ({ label, register, error }: FormComponentProps) => (
  <div className="flex flex-col gap-[5px] mt-[37px] w-full">
    <label className="text-[18px]">{label}</label>
    <div className="flex gap-[16px]">
      <input
        type="text"
        placeholder="თეგის დამატება"
        className="px-[18px] py-[17px] rounded-[8px] outline outline-[#E3E8EF] focus:outline-[#3012B3CC] w-full"
        {...register}
      />
      <div className="px-[17px] py-[17px] border border-[#E3E8EF] rounded-[8px] cursor-pointer">
        <Image
          src="/images/svg/plus.svg"
          alt="pluse icon"
          width={22}
          height={22}
        />
      </div>
    </div>
    {error && <p className="ml-[10px] text-[12px] text-red-500">{error}</p>}
  </div>
);

export default TagInput;
