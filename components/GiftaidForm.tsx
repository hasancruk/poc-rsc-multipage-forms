import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGiftaidFormData } from "./GiftaidFormContext";
import { FormProps, GiftaidInputs } from "../types/types";

export default function Form(props: FormProps) {
  const [form, setForm] = useGiftaidFormData();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<GiftaidInputs>({ defaultValues: form, mode: "onSubmit" });
  const router = useRouter();
  const onSubmit: SubmitHandler<GiftaidInputs> = (data) => {
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
  );
}
