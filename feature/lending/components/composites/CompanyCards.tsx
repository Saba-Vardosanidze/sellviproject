'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchCompanyCards } from '../../api';
import CompanyCard from '../primitives/CompanyCard';
import { CompanyCardsProps } from '../../type';

const CompanyCards = () => {
  const { data, isLoading, isError } = useQuery<CompanyCardsProps[]>({
    queryKey: ['cards'],
    queryFn: fetchCompanyCards,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to fetch Cards</p>;

  return (
    <div className="space-y-[31px]">
      <p className="font-bold text-[#583CCF] text-[32px] text-center">
        აღმოაჩინე აქტიური კამპანიები
      </p>
      <div className="flex flex-wrap justify-center gap-[26px] w-full">
        {data?.map((task) => (
          <CompanyCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompanyCards;
