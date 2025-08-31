import { CompanyCardsProps } from '../lending/type';
const baseURL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export const createCompanyCard = async (newBlog: CompanyCardsProps) => {
  const response = await fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBlog),
  });

  if (!response.ok) {
    throw new Error('Failed to create comment');
  }
  return response.json();
};
