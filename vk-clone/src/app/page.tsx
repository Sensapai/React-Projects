import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      {/*Header*/}
      <Header />
      <main className="m-auto px-4 relative max-w-[1130px] w-full">
        {/*Sidebar*/}
        <Sidebar />
        {/*Feed*/}
        {/*Widgets*/}
      </main>
    </>
  );
}
