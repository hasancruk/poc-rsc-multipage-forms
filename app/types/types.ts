export type FormProps = {
  formName: string;
  step: string;
};
export const paymentMethods = {
  card: "Card",
  paypal: "Paypal",
  googlePay: "Google Pay",
  applePay: "Apple Pay",
} as const;
export type Inputs = {
  amount: number;
  motivation: string;
  name: string;
  phoneNumber: string;
  postcode: string;
  paymentMethod: string;
};
