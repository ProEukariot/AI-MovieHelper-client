import { createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";

export type FormFields = {
  query: string;
  genre: string;
  mood: string;
  type: string;
};

export const FormContext = createContext<UseFormReturn<FormFields> | undefined>(
  undefined
);

export const useFormContext = () => {
  const form = useContext(FormContext);

  if (!form) throw new Error("formContext is undefined");

  return form;
};
