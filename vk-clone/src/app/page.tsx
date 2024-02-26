import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Feed from "@/pages/Feed";

export default function Home() {
  return (
    <>
      {/*Header*/}
      <Header />
      <main className="m-auto flex px-4 relative max-w-[1113px] w-full space-x-1">
        {/*Sidebar*/}
        <Sidebar />
        {/*Feed*/}
        <Feed />
        {/*Widgets*/}
      </main>
    </>
  );
}
