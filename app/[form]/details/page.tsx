"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  phoneNumber: string;
  postcode: string;
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
    router.push(`/${params.form}/payment`);
  };
  return (
    <main className="main">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          {...register("name", {
            required: "error message",
          })}
        />
        <label>Phone Number</label>
        <input
          type="tel"
          {...register("phoneNumber", {
            required: "error message",
          })}
        />
        <label>Post Code</label>
        <input
          type="text"
          {...register("postcode", {
            required: "error message",
          })}
        />
        <input type="submit" />
      </form>
    </main>
  );
}
