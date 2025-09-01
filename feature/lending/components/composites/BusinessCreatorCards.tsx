'use client';
import { useState } from 'react';
import ButtonSlider from '../primitives/ButtonSlider';
import { businessCreatorData } from '../../data/businessCreatorData';
import Image from 'next/image';

const BusinessCreatorCards = () => {
  const [active, setActive] = useState<'business' | 'creator'>('business');

  const businessAndCreator =
    active === 'business'
      ? businessCreatorData.business
      : businessCreatorData.creator;

  return (
    <div
      id="howtowork"
      className="flex flex-col items-center space-y-[28px] m-auto px-[10px] w-full"
    >
      <p className="font-medium text-[32px] text-center">როგორ მუშაობს</p>
      <ButtonSlider active={active} setActive={setActive} />
      <div className="flex flex-wrap justify-center gap-[13px] w-full max-w-[1380px]">
        {businessAndCreator.map((eachElement) => (
          <div
            key={eachElement.id}
            className={`rounded-[8px] gap-[15px] w-full px-[15px] pt-[26px] pb-[15px] ${
              active === 'creator'
                ? 'max-w-[265px] min-h-[265px] flex flex-col items-center'
                : 'max-w-[335px] min-h-[149px] flex'
            } `}
            style={{
              background:
                'linear-gradient(0deg,rgba(48, 18, 179, 1) 0%, rgba(123, 98, 232, 1) 100%)',
            }}
          >
            <div className="flex justify-center items-center bg-[#FFFFFF1F] rounded-full w-[60px] h-[60px] shrink-0">
              <Image
                src={eachElement.icon}
                alt={eachElement.alt}
                width={22}
                height={22}
              />
            </div>
            <div className="space-y-[8px]">
              <p
                className={`font-medium text-[#FFFFFF] text-[18px] ${
                  active === 'creator' ? 'text-center' : 'text-start'
                }`}
              >
                {eachElement.title}
              </p>
              <p
                className={`font-medium text-[#B3B3B3] text-[12px] ${
                  active === 'creator' ? 'text-center' : 'text-start'
                }`}
              >
                {eachElement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCreatorCards;
