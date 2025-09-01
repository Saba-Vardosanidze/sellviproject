'use client';
import Image from 'next/image';
const CampaignHeader = () => (
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
);
export default CampaignHeader;
