'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { createCompanyCard } from '../../api';
import { companyCreateCard } from '@/feature/schema/createCompanyCardSchema';
import CampaignHeader from '../primitives/CampaignHeader';
import InputField from '../primitives/InputField';
import BudgetInput from '../primitives/BudgetInput';
import TextAreaField from '../primitives/TextAreaField';
import ToggleField from '../primitives/ToggleField';
import TagInput from '../primitives/TagInput';

const CreateCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(companyCreateCard),
    defaultValues: {
      verified: false,
      categories: [],
    },
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
      <CampaignHeader />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex gap-[75px] mt-[24px] w-full">
          <InputField
            label="კამპანიის სახელი"
            placeholder="მაგ: საზაფხულო პროდუქტი"
            id="CompanyName"
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
          id="description"
          register={register('description')}
          error={errors.description?.message}
        />

        <ToggleField
          label="ვერიფიკაცია"
          value={watch('verified')}
          onToggle={(val) => setValue('verified', val)}
        />

        <TagInput
          label="კამპანიის თეგები"
          onChange={(tags) => setValue('categories', tags)}
          error={errors.categories?.message}
        />

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
