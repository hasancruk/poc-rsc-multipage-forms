"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

const paymentMethods = {
  card: "Card",
  paypal: "Paypal",
  googlePay: "Google Pay",
  applePay: "Apple Pay",
} as const;

type Inputs = {
  paymentMethod: keyof typeof paymentMethods;
};

export default function Page({
  params,
  searchParams,
}: {
  params: { form: string }; //An object containing the dynamic route parameters from the root segment down to that page.
  searchParams: { [key: string]: string | string[] | undefined }; //An object containing the search parameters of the current URL - eg tye=regular
}) {
  const { handleSubmit, register } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const existingData = JSON.parse(
      sessionStorage.getItem(`formData-${params.form}`) || ""
    );
    sessionStorage.setItem(
      `formData-${params.form}`,
      JSON.stringify({ ...existingData, ...data })
    );
    router.push(`/${params.form}/thanks`);
  };
  return (
    <main className="main">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Card</label>
        <input
          {...register("paymentMethod", { required: true })}
          type="radio"
          value="card"
        />
        <label>PayPal</label>
        <input
          {...register("paymentMethod", { required: true })}
          type="radio"
          value="paypal"
        />
        <label>Google Pay</label>
        <input
          {...register("paymentMethod", { required: true })}
          type="radio"
          value="googlePay"
        />
        <label>Apple Pay</label>
        <input
          {...register("paymentMethod", { required: true })}
          type="radio"
          value="applePay"
        />
        <input type="submit" />
      </form>
    </main>
  );
}
