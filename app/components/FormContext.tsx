"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { Inputs } from "../types/types";

// useFormState: invokes usestate to create form
const useFormState = (initialForm: Inputs) => useState<Inputs>(initialForm);

//FormContext: creating a form context to provide the state- w return type of the useFormState custom hook we create
export const FormContext = createContext<ReturnType<
  typeof useFormState
> | null>(null);

//useForm:  create hook to acces the form data. useContext hook gets the context from CartContext, if not throw an error. Output of this should be an array with the form and the formSetter
export const useFormData = () => {
  const form = useContext(FormContext);
  if (!form) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return form;
};

//formProvider: client component that wraps components downstream in provider that that provides to them the form.
export const FormProvider = ({
  form: initialForm,
  children,
}: {
  form: Inputs;
  children: ReactNode;
}) => {
  const [form, setForm] = useFormState(initialForm);
  return (
    <FormContext.Provider value={[form, setForm]}>
      {children}
    </FormContext.Provider>
  );
};
