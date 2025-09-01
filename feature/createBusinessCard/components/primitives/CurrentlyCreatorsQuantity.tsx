import { FormComponentProps } from '../../type';

const CurrentlyCreatorsQuantity = ({
  label,
  placeholder,
  id,
  register,
  error,
}: FormComponentProps) => (
  <div className="flex flex-col gap-[5px] w-1/2">
    <label htmlFor={id} className="text-[18px]">
      {label}
    </label>
    <input
      type="number"
      placeholder={placeholder}
      id={id}
      className="px-[18px] py-[17px] rounded-[8px] outline outline-[#E3E8EF] focus:outline-[#3012B3CC] w-full"
      {...register}
    />
    {error && <p className="ml-[10px] text-[12px] text-red-500">{error}</p>}
  </div>
);

export default CurrentlyCreatorsQuantity;
