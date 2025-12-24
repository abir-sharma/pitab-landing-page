import Banner1 from "@/components/Banner1";
import Banner2 from "@/components/Banner2";
import Banner3 from "@/components/Banner3";
import Banner4 from "@/components/Banner4";
import FaqSection from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MdmBanner from "@/components/MdmBanner";
import TabSpecs from "@/components/TabSpecs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <TabSpecs />
      <MdmBanner />
      <FaqSection />
      <Footer />
    </>
  );
}
