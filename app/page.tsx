import dynamic from "next/dynamic";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import KindOfWord from "@/components/KindOfWord";
import { Navbar } from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

// Lazy load heavy components
const RecentProject = dynamic(() => import("@/components/RecentProject"), {
  loading: () => (
    <div className="py-20">
      <div className="animate-pulse bg-gray-800 h-64 rounded-lg"></div>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Grid />
        <Suspense
          fallback={
            <div className="py-20">
              <div className="animate-pulse bg-gray-800 h-64 rounded-lg"></div>
            </div>
          }
        >
          <RecentProject />
        </Suspense>
        <KindOfWord />
        <Form />
      </div>
      <div className="w-full">
        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  );
}
