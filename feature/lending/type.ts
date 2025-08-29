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
