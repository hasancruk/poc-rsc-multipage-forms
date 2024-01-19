"use client";

import Form from "../../../components/Form";

export default function Page({
  params,
  searchParams,
}: {
  params: { form: string }; //An object containing the dynamic route parameters from the root segment down to that page.
  searchParams: { [key: string]: string | string[] | undefined }; //An object containing the search parameters of the current URL - eg tye=regular
}) {
  return (
    <main className="main">
      <p>details</p>
      <Form formName={params.form} step="details" />
    </main>
  );
}
