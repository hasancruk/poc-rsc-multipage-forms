"use client";

import "./globals.css";
import { FormProvider } from "../components/FormContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = {
    amount: 0,
    motivation: "",
    name: "",
    phoneNumber: "",
    postcode: "",
    paymentMethod: "card",
  };
  return (
    <html>
      <body>
        <FormProvider form={form}>{children}</FormProvider>
      </body>
    </html>
  );
}
