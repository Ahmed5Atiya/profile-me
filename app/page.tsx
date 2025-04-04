import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import KindOfWord from "@/components/KindOfWord";
import { Navbar } from "@/components/Navbar";
import RecentProject from "@/components/RecentProject";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl  w-full">
        <Navbar />
        <Hero />
        <Grid />
        <RecentProject />
        <KindOfWord />
        {/* <FormDemo /> */}
        <Form />
      </div>
      <div className="w-full ">
        <Footer />
      </div>
    </main>
  );
}
