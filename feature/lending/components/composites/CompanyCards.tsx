'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchCompanyCards } from '../../api';
import CompanyCard from '../primitives/CompanyCard';
import { CompanyCardsProps } from '../../type';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ArrowLeft, ArrowRight, PluseCompany } from '@/public/images/svg';
import Link from 'next/link';

const CompanyCards = () => {
  const { data, isLoading, isError } = useQuery<CompanyCardsProps[]>({
    queryKey: ['cards'],
    queryFn: fetchCompanyCards,
  });

  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to fetch Cards</p>;

  return (
    <div
      id="discoverbusiness"
      className="space-y-[31px] mx-auto px-[10px] w-full max-w-[1440px]"
    >
      <p className="font-bold text-[#583CCF] text-[32px] text-center">
        აღმოაჩინე აქტიური კამპანიები
      </p>
      <div
        className="m-auto w-full max-w-[445px] lg:max-w-[1000px] xl:max-w-[1388px] overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex gap-[26px]">
          {data?.map((task) => (
            <div
              key={task.id}
              className="flex-[0_0_100%] lg:flex-[0_0_50%] xl:flex-[0_0_32%]"
            >
              <CompanyCard task={task} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#262626] mt-[40px] w-full h-[1px]" />
      <div className="flex justify-between items-center px-[15px] w-full">
        <Link href="/createBusinessCard">
          <button className="flex justify-center items-center gap-[5px] bg-[#00000008] hover:bg-[#583CCF] shadow-[0px_0px_8.8px_0px_#0000000A] px-[12px] py-[12px] border border-[#0000000A] rounded-[8px] font-medium hover:font-bold hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            <PluseCompany />
            შექმენი კამპანია
          </button>
        </Link>
        <div className="flex gap-[16px] mt-[5px]">
          <button
            onClick={scrollPrev}
            className="flex justify-center items-center hover:bg-[#583CCF] px-[7px] py-[7px] border border-[#00000012] rounded-full w-[44px] h-[44px] hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={scrollNext}
            className="flex justify-center items-center hover:bg-[#583CCF] px-[7px] py-[7px] border border-[#00000012] rounded-full w-[44px] h-[44px] hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCards;
