'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchCompanyCards } from '../../api';
import Image from 'next/image';
import Link from 'next/link';

const CompanyCards = () => {
  const { data, isLoading, isError } = useQuery({
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
      <div className="flex justify-center gap-[26px] w-full">
        {data?.map((task) => (
          <div
            key={task.id}
            className="px-[25px] py-[23px] border border-[#3012B3CC] rounded-[8px] w-full max-w-[445px] min-h-[417px]"
          >
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-[7px]">
                <div className="bg-[#D9D9D9] border border-[#0000007A] rounded-[8px] w-[28px] h-[28px]"></div>
                <p className="font-bold text-[#000000] text-[22px]">
                  {task.title}
                </p>
                {task.verified ? (
                  <Image
                    src="/images/svg/verified.svg"
                    alt="verified"
                    width={20}
                    height={20}
                  />
                ) : (
                  ''
                )}
              </div>
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/images/svg/star.svg"
                  alt="rating"
                  width={18}
                  height={18}
                />
                <p className="font-bold text-[#000000] text-[14px]">
                  {task.rating}
                </p>
              </div>
            </div>
            <div className="mt-[19px]">
              <p className="font-medium text-[#000000] text-[14px]">
                პოპულარული კვირის ჰაილაითები
              </p>
              <div className="flex gap-[9px] mt-[8px] mb-[6px]">
                {task.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-[#F1E7FF] px-[10px] py-[6px] border border-[#3012B3] rounded-[60px] font-medium text-[#3012B3] text-[10px] cursor-default"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <p className="font-medium text-[#000000] text-[14px]">
                {task.description}
              </p>
            </div>
            <div className="bg-[#3012B30F] mt-[13px] rounded-[10px] w-full max-w-[391px] min-h-[113px]"></div>
            <div className="space-y-[11px] mt-[6px]">
              <div className="flex gap-[8px]">
                <Image
                  src="/images/svg/filter.svg"
                  alt="filter"
                  width={18}
                  height={18}
                />
                <div className="flex font-bold text-[#000000D4] text-[12px]">
                  <p className="flex gap-[2px]">
                    <span>{task.filters.contentType}</span>,
                    <span>{task.filters.requirement}</span>,
                    <span>{task.filters.videolength} წმ</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-[8px]">
                <Image
                  src="/images/svg/calendar.svg"
                  alt="calendar"
                  width={18}
                  height={18}
                />
                <div className="flex font-bold text-[#000000D4] text-[12px]">
                  <p>ბოლო ვადა:</p>
                  <p>{task.deadline}</p>
                </div>
              </div>
            </div>
            <Link href={task.button.url}>
              <button
                className="mt-[17px] rounded-[8px] w-full min-h-[39px] font-medium text-[##F1E7FF] text-[12px] cursor-pointer"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(48,18,179,1) 0%, rgba(123,98,232,1) 100%)',
                }}
              >
                გაწევრიანება
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCards;
