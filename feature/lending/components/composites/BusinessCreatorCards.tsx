'use client';
import { useState } from 'react';
import ButtonSlider from '../primitives/ButtonSlider';

const BusinessCreatorCards = () => {
  const [active, setActive] = useState<'business' | 'creator'>('business');

  return (
    <div className="space-y-[28px] m-auto w-full max-w-[1325px]">
      <p className="font-medium text-[32px] text-center">როგორ მუშაობს</p>
      <ButtonSlider active={active} setActive={setActive} />
      <div></div>
    </div>
  );
};

export default BusinessCreatorCards;
