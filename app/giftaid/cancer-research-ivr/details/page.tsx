"use client";
import GiftaidForm from "../../../../components/GiftaidForm";
export default function Page({
  params,
  searchParams,
}: {
  params: { form: string }; //An object containing the dynamic route parameters from the root segment down to that page.
  searchParams: { [key: string]: string | string[] | undefined }; //An object containing the search parameters of the current URL - eg tye=regular
}) {
  return (
    <main className="main">
      <GiftaidForm formName="cancer-research-ivr" step="details" />
    </main>
  );
}
