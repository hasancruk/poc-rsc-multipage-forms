export default function Page({
  params,
  searchParams,
}: {
  params: { formName: string }; //An object containing the dynamic route parameters from the root segment down to that page.
  searchParams: { [key: string]: string | string[] | undefined }; //An object containing the search parameters of the current URL - eg tye=regular
}) {
  return (
    <main>
      <p>helloe helllo hello</p>
    </main>
  );
}
