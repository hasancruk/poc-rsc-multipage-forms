"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  amount: number;
  motivation: string;
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
    sessionStorage.setItem(`formData-${params.form}`, JSON.stringify(data));
    router.push(`/${params.form}/details`);
  };
  return (
    <main className="main">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Amount</label>
        <input
          type="number"
          {...register("amount", {
            required: "error message",
          })}
        />
        <label>Your motivation</label>
        <select {...register("motivation")}>
          <option value="In memeory of someone">In memeory of someone</option>
          <option value="I or a loved one has beaten cancer">
            I or a loved one has beaten cancer
          </option>
          <option value="I or a loved one has cancer">
            I or a loved one has cancer
          </option>
          <option value="Different reason">Different reason</option>
        </select>
        <input type="submit" />
      </form>
    </main>
  );
}
