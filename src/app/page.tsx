import VideoSection from "@/components/page/HomePage/VideoSection";
import Header from "@/components/shared/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <VideoSection></VideoSection>
      <div className="min-h-screen bg-red-300">

      </div>
    </div>
  );
}
