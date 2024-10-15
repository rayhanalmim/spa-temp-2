import HeaderText from "@/components/page/HomePage/HeaderText";
import HighlightSection from "@/components/page/HomePage/HighlightSection";
import VideoSection from "@/components/page/HomePage/VideoSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <VideoSection></VideoSection>

      <div className="">
        <HeaderText></HeaderText>
      </div>
      <HighlightSection></HighlightSection>
      <Footer></Footer>
    </div>
  );
}
