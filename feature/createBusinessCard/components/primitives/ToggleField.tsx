import { ToggleFieldProps } from '../../type';
import ToggleSwitch from '../primitives/ToggleSwitch';

const ToggleField = ({ label, value, onToggle }: ToggleFieldProps) => (
  <div className="flex justify-between mt-[37px] px-[18px] py-[17px] border border-[#E3E8EF] rounded-[8px]">
    <p className="text-[#00000083] text-[18px] cursor-default">{label}</p>
    <ToggleSwitch value={value} onToggle={onToggle} />
  </div>
);

export default ToggleField;
