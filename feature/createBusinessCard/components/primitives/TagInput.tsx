import Image from 'next/image';
import { useState } from 'react';
import { TagInputProps } from '../../type';

const TagInput = ({ label, error, onChange }: TagInputProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTag = () => {
    if (inputValue.trim()) {
      const newCategories = [...categories, inputValue.trim()];
      setCategories(newCategories);
      setInputValue('');

      onChange?.(newCategories);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };
  return (
    <div className="flex flex-col gap-[5px] mt-[37px] w-full">
      <label className="text-[18px]">{label}</label>
      <div className="flex gap-[16px]">
        <input
          type="text"
          placeholder="თეგის დამატება"
          className="px-[18px] py-[17px] rounded-[8px] outline outline-[#E3E8EF] focus:outline-[#3012B3CC] w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          type="button"
          onClick={handleAddTag}
          className="px-[17px] py-[17px] border border-[#E3E8EF] rounded-[8px] cursor-pointer"
        >
          <Image
            src="/images/svg/plus.svg"
            alt="plus icon"
            width={22}
            height={22}
          />
        </button>
      </div>

      {categories.length > 0 && (
        <div className="flex flex-wrap gap-[8px] mt-[10px]">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-[#F3F4F6] px-[12px] py-[6px] rounded-[6px] text-[14px]"
            >
              {category}
            </span>
          ))}
        </div>
      )}

      {error && <p className="ml-[10px] text-[12px] text-red-500">{error}</p>}
    </div>
  );
};

export default TagInput;
