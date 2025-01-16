export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="col-span-4 col-start-5 items-center row-span-12">
      <div className="">
        {children}
      </div>
    </div>
  );
}
