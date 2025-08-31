'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { createCompanyCard } from '../../api';
import ToggleSwitch from '../primitives/ToggleSwitch';
import { companyCreateCard } from '@/feature/schema/createCompanyCardSchema';

const CreateCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(companyCreateCard),
    defaultValues: { verified: false },
  });

  const { mutate } = useMutation({
    mutationFn: createCompanyCard,
    onSuccess: () => {},
    onError: () => {},
  });

  const submitForm = (data) => {
    mutate(data);
  };

  return (
    <div className="m-auto p-[30px] border-[#00000022] border-[2px] rounded-[8px] w-full max-w-[1222px]">
      <div>
        <div className="flex gap-[8px] font-semibold text-[20px]">
          <Image
            src="/images/svg/control.svg"
            alt="control"
            width={22}
            height={22}
          />
          <p>კამპანია</p>
        </div>
        <p className="text-[#00000068] text-[14px]">
          დააყენეთ კამპანიის ფუნდამენტური დეტალები
        </p>
      </div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex gap-[75px] mt-[24px] w-full">
          <div className="flex flex-col gap-[5px] w-1/2">
            <label htmlFor="CompanyName" className="text-[18px]">
              კამპანიის სახელი
            </label>
            <input
              className="px-[18px] py-[17px] rounded-[8px] outline outline-[#E3E8EF] focus:outline-[#3012B3CC] w-full"
              type="text"
              placeholder="მაგ: საზაფხულო პროდუქტი"
              id="CompanyName"
              {...register('title')}
            />
            <p className="ml-[10px] text-[12px] text-red-500">
              {errors.title?.message}
            </p>
          </div>
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
                {...register('budget', { valueAsNumber: true })}
              />
              <Image
                src="images/svg/lari.svg"
                alt="lariPhoto"
                width={20}
                height={20}
                className="top-[18px] left-[18px] absolute"
              />
              <p className="ml-[10px] text-[12px] text-red-500">
                {errors.budget?.message}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[5px] mt-[37px] w-full">
          <label htmlFor="description" className="text-[18px]">
            კამპანიის აღწერა
          </label>
          <textarea
            className="px-[18px] py-[17px] rounded-[8px] outline outline-[#E3E8EF] focus:outline-[#3012B3CC] w-full"
            placeholder="აღწერეთ თქვენი კამპანიის მიზნები, სამიზნე აუდიტორია და რას ეძებთ შემქმნელებში..."
            id="description"
            {...register('description')}
          />
          <p className="ml-[10px] text-[12px] text-red-500">
            {errors.description?.message}
          </p>
        </div>

        <div className="flex justify-between mt-[37px] px-[18px] py-[17px] border border-[#E3E8EF] rounded-[8px]">
          <p className="text-[#00000083] text-[18px] cursor-default">
            ვერიფიკაცია
          </p>
          <ToggleSwitch
            value={watch('verified')}
            onToggle={(val) => setValue('verified', val)}
          />
        </div>

        <button
          type="submit"
          className="flex justify-center items-center bg-[var(--colorBlack)] ml-[40px] rounded-[8px] w-full max-w-[150px] min-h-[45px] font-bold text-[14px] text-[var(--colorWhite)] cursor-pointer"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CreateCard;
