import { z } from 'zod';

export const companyCreateCard = z.object({
  title: z
    .string()
    .min(3, { message: 'კომპანიის სახელი უნდა შეიცავდეს მინიმუმ 3 ასოს' })
    .max(50, { message: 'კომპანიის სახელი მეტია 50 სიმბოლოზე' }),
  budget: z
    .number({ message: 'ბიუჯეტი უნდა იყოს რიცხვი' })
    .min(10, { message: 'ბიუჯეტი უნდა იყოს მინიმუმ 10' })
    .max(1000000, { message: 'ბიუჯეტი მეტია დასაშვებზე' }),
  description: z
    .string()
    .min(20, { message: 'აღწერა უნდა იყოს მინიმუმ 20 სიმბოლო' })
    .max(300, { message: 'აღწერა უნდა იყოს მაქსიმუმ 300 სიმბოლო' })
    .transform((s) => s.trim()),
  verified: z.boolean(),
  categories: z.array(z.string()).optional(),
});
