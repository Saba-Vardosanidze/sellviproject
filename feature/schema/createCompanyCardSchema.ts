import { z } from 'zod';

export const companyCreateCard = z.object({
  title: z
    .string()
    .min(3, { message: 'კომპანიის სახელი უნდა შეიცავდეს მინიმუმ 3 ასოს' })
    .max(50, { message: 'კომპანიის სახელი მეტია 50 სიმბოლოზე' }),
  budget: z
    .number({ message: 'ბიუჯეტი უნდა იყოს რიცხვი' })
    .min(10, { message: 'ბიუჯეტი უნდა იყოს მინიმუმ 10' })
    .max(1000000, { message: 'ბიუჯეტი მეტია დასაშვებაზე' }),
  description: z
    .string()
    .min(20, { message: 'აღწერა უნდა იყოს მინიმუმ 20 სიმბოლო' })
    .max(300, { message: 'აღწერა უნდა იყოს მაქსიმუმ 300 სიმბოლო' })
    .transform((s) => s.trim()),
  totalCreator: z
    .number({ message: 'შემქმნელების რაოდენობა უნდა იყოს რიცხვი' })
    .min(0, { message: 'შემქმნელების რაოდენობა შეიძლება მიუთითო მინიმუმ 1' })
    .max(50, { message: 'შემქმნელების რაოდენობა 50 მდე შეგიძლია მიუთითო' }),
  currentlyCreator: z
    .number({ message: 'შემქმნელების რაოდენობა უნდა იყოს რიცხვი' })
    .min(0, { message: 'შემქმნელების რაოდენობა შეიძლება მიუთითო 0 დან' })
    .max(50, { message: 'შემქმნელების რაოდენობა 50 მდე შეგიძლია მიუთითო' }),
  compensation: z
    .number({ message: 'ბიუჯეტი უნდა იყოს რიცხვი' })
    .min(10, { message: 'ბიუჯეტი უნდა იყოს მინიმუმ 10' })
    .max(1000000, { message: 'ბიუჯეტი მეტია დასაშვებაზე' }),

  verified: z.boolean(),
  categories: z.array(z.string()).optional(),
  filters: z.array(z.string()).optional(),

  deadline: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'გთხოვთ მიუთითოთ სწორი თარიღი',
    })
    .refine(
      (val) => {
        const today = new Date();
        const inputDate = new Date(val);
        today.setHours(0, 0, 0, 0);
        inputDate.setHours(0, 0, 0, 0);
        return inputDate >= today;
      },
      { message: 'თარიღი უნდა იყოს დღევანდელი ან მომავალი' }
    ),
});
