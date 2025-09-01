'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { createCompanyCard } from '../../api';
import {
  companyCreateCard,
  CompanyCreateCardType,
} from '@/feature/schema/createCompanyCardSchema';
import CampaignHeader from '../primitives/CampaignHeader';
import InputField from '../primitives/InputField';
import BudgetInput from '../primitives/BudgetInput';
import TextAreaField from '../primitives/TextAreaField';
import ToggleField from '../primitives/ToggleField';
import TagField from '../primitives/TagField';
import CreatorsQuantity from '../primitives/CreatorsQuantity';
import CurrentlyCreatorsQuantity from '../primitives/CurrentlyCreatorsQuantity';
import Compensation from '../primitives/Compensation';
import DateInput from '../primitives/DataInput';
import toast from 'react-hot-toast';
import Link from 'next/link';

const CreateCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(companyCreateCard),
    defaultValues: {
      verified: false,
      categories: [],
    },
  });

  const { mutate } = useMutation({
    mutationFn: createCompanyCard,
    onSuccess: () => {
      reset();
      toast.success('წარმატებით დაემატა!');
    },
    onError: () => {
      toast.error('დაფიქსირდა შეცდომა.');
    },
  });

  const submitForm = (data: CompanyCreateCardType) => {
    mutate(data);
  };

  return (
    <div className="m-auto p-[30px] border-[#00000022] border-[2px] rounded-[8px] w-full max-w-[1222px]">
      <CampaignHeader />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex gap-[75px] mt-[24px] w-full">
          <InputField
            label="კამპანიის სახელი"
            placeholder="მაგ: საზაფხულო პროდუქტი"
            register={register('title')}
            error={errors.title?.message}
          />
          <BudgetInput
            register={register('budget', { valueAsNumber: true })}
            error={errors.budget?.message}
          />
        </div>

        <TextAreaField
          label="კამპანიის აღწერა"
          placeholder="აღწერეთ თქვენი კამპანიის მიზნები, სამიზნე აუდიტორია და რას ეძებთ შემქმნელებში..."
          register={register('description')}
          error={errors.description?.message}
        />

        <ToggleField
          label="ვერიფიკაცია"
          value={watch('verified')}
          onToggle={(val) => setValue('verified', val)}
        />

        <TagField
          label="კამპანიის თეგები"
          placeholder="თეგის დამატება"
          onChange={(tags) => setValue('categories', tags)}
          error={errors.categories?.message}
        />

        <TagField
          label="მოთხოვნები შემქმნელებისთვის"
          placeholder="მაგ: ვიდეო 20+ წმ"
          onChange={(filters) => setValue('filters', filters)}
          error={errors.filters?.message}
        />

        <div className="flex gap-[75px] mt-[37px] w-full">
          <CreatorsQuantity
            label="შემქმნელების მაქსიმალური რაოდენობა"
            placeholder="გამოიყენეთ მხოლოდ რიცხვები"
            register={register('totalCreator', { valueAsNumber: true })}
            error={errors.totalCreator?.message}
          />
          <CurrentlyCreatorsQuantity
            label="ამჟამინდელი მომუშავე შემქმნელების რაოდენობა"
            placeholder="გამოიყენეთ მხოლოდ რიცხვები"
            register={register('currentlyCreator', { valueAsNumber: true })}
            error={errors.currentlyCreator?.message}
          />
        </div>

        <Compensation
          label="ყოველ 1 მილიონ ნახვაზე ანაზღაურება"
          placeholder="გამოიყენეთ მხოლოდ რიცხვები"
          register={register('compensation', { valueAsNumber: true })}
          error={errors.currentlyCreator?.message}
        />

        <DateInput
          label="კამპანიის ხანგრძლივობა (დღეები)"
          register={register('deadline')}
          error={errors.deadline?.message}
        />
        <div className="flex justify-end gap-[22px] mt-[64px] w-full">
          <Link href="/">
            <button className="flex justify-center items-center bg-white px-[12px] py-[12px] border border-[#00000024] rounded-[10px] cursor-pointer">
              დაბრუნდი მთავარ გვერძე
            </button>
          </Link>
          <button
            type="submit"
            className="flex justify-center items-center bg-[#0866FF] px-[12px] py-[12px] border border-[#00000024] rounded-[10px] text-white cursor-pointer"
          >
            შექმენი გამპანია
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCard;
