export type CompanyCardsProps = {
  id: number;
  title: string;
  verified: boolean;
  rating: number;
  categories: string[];
  description: string;
  pricePerUnit: {
    amount: number;
    currency: string;
    unit: string;
  };
  requirements: {
    joined: number;
    total: number;
  };
  budget: number;
  filters: {
    contentType: string;
    requirement: string;
    videolength: string;
  };
  deadline: string;
  button: {
    url: string;
  };
};

export type ProgressBarProps = {
  currentAmount: number;
  goalAmount: number;
};
export type CompanyCardProps = {
  task: CompanyCardsProps;
};

export type ButtonSliderProps = {
  active: 'business' | 'creator';
  setActive: (value: 'business' | 'creator') => void;
};
export type Item = {
  id: number;
  title: string;
  description: string;
  icon: string;
  alt: string;
};

export type DataProps = {
  business: Item[];
  creator: Item[];
};
