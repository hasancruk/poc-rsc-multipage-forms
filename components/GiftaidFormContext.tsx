"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { GiftaidInputs } from "../types/types";

// useFormState: invokes usestate to create form
const useGiftaidFormState = (initialForm: GiftaidInputs) =>
  useState<GiftaidInputs>(initialForm);

//FormContext: creating a form context to provide the state- w return type of the useFormState custom hook we create
export const GiftaidFormContext = createContext<ReturnType<
  typeof useGiftaidFormState
> | null>(null);

//useForm:  create hook to acces the form data. useContext hook gets the context from CartContext, if not throw an error. Output of this should be an array with the form and the formSetter
export const useGiftaidFormData = () => {
  const form = useContext(GiftaidFormContext);
  if (!form) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return form;
};

//formProvider: client component that wraps components downstream in provider that that provides to them the form.
export const GiftaidFormProvider = ({
  form: initialForm,
  children,
}: {
  form: GiftaidInputs;
  children: ReactNode;
}) => {
  const [form, setForm] = useGiftaidFormState(initialForm);
  return (
    <GiftaidFormContext.Provider value={[form, setForm]}>
      {children}
    </GiftaidFormContext.Provider>
  );
};
