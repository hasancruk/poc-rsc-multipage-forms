"use client";

import "../globals.css";
import { GiftaidFormProvider } from "../../components/GiftaidFormContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = {
    name: "",
    phoneNumber: "",
    postcode: "",
  };
  return (
    <html>
      <body>
        <GiftaidFormProvider form={form}>{children}</GiftaidFormProvider>
      </body>
    </html>
  );
}
