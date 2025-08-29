import { CompanyCardsProps } from './type';

const baseURL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export const fetchCompanyCards = async (): Promise<CompanyCardsProps[]> => {
  if (!baseURL) {
    throw new Error('API URL is not defined');
  }
  const response = await fetch(`${baseURL}/login`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Cards`);
  }

  return response.json();
};
