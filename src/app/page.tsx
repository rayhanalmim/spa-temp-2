import Dine from "@/components/page/HomePage/Dine/Dine";
import ExploreSection from "@/components/page/HomePage/Explore/ExploreSection";
import HeaderText from "@/components/page/HomePage/HeaderText";
import HighlightSection from "@/components/page/HomePage/Highligh/HighlightSection";
import ShopLink from "@/components/page/HomePage/ShopLink";
import Spa from "@/components/page/HomePage/Spa/Spa";
import TeaserLink from "@/components/page/HomePage/TeaserLink";
import VideoSection from "@/components/page/HomePage/VideoSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header/Header";
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
      <TeaserLink></TeaserLink>
      <Dine></Dine>
      <Spa></Spa>

      <ExploreSection></ExploreSection>
      <ShopLink></ShopLink>
      <Footer></Footer>
    </div>
  );
};
