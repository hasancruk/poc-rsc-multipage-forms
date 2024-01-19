import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFormData } from "./FormContext";
import { FormProps, Inputs } from "../types/types";
import Link from "next/link";

export default function Form(props: FormProps) {
  const [form, setForm] = useFormData();

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({ defaultValues: form, mode: "onSubmit" });
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sessionStorage.setItem(`formData-${props.formName}`, JSON.stringify(data));

    setForm({ ...form, ...data });
    sessionStorage.setItem(
      `formDataFROMCONTEXT-${props.formName}`,
      JSON.stringify(form)
    );

    router.push(`/${props.formName}/thanks`);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <p>the form</p>
      {props.step == "your-donation" ? (
        <>
          <label>Amount</label>
          <input
            type="number"
            {...register("amount", {
              required: "error message",
            })}
          />
          <label>Your motivation</label>
          <select {...register("motivation")}>
            <option value="In memory of someone">In memory of someone</option>
            <option value="I or a loved one has beaten cancer">
              I or a loved one has beaten cancer
            </option>
            <option value="I or a loved one has cancer">
              I or a loved one has cancer
            </option>
            <option value="Different reason">Different reason</option>
          </select>
          {/* next button here or on page? */}
          <Link
            onClick={() => {
              setForm({
                ...form,
                amount: getValues("amount"),
                motivation: getValues("motivation"),
              });
            }}
            href={`/${props.formName}/details`}
          >
            Next
          </Link>
        </>
      ) : (
        ""
      )}
      {props.step == "details" ? (
        <>
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
          {/* next button here or on page? */}
          <Link
            onClick={() => {
              setForm({
                ...form,
                name: getValues("name"),
                phoneNumber: getValues("phoneNumber"),
                postcode: getValues("postcode"),
              });
            }}
            href={`/${props.formName}/payment`}
          >
            Next
          </Link>
        </>
      ) : (
        ""
      )}
      {props.step == "payment" ? (
        <>
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
        </>
      ) : (
        ""
      )}
    </form>
  );
}
