'use client';

import Image from 'next/image';
import { heroScrollDownButton } from '../../data/heroButtonsData';
import { motion } from 'motion/react';
import Link from 'next/link';

const HeroSectionBottomSide = () => {
  return (
    <div className="flex gap-[11px] mt-[49px]">
      {heroScrollDownButton.map((eachElement) => (
        <Link href={eachElement.href} key={eachElement.id}>
          <button className="flex justify-center items-center gap-[10px] bg-[#0866FF1F] p-[19px] rounded-[33px] font-medium text-[18px] text-white cursor-pointer">
            {eachElement.label}
            <motion.div
              className="mt-[2px]"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/images/svg/arrow-down.svg"
                alt="arrow down"
                width={20}
                height={20}
              />
            </motion.div>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default HeroSectionBottomSide;
