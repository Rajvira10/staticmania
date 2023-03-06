import Articles from "../../components/Articles";
import Episodes from "../../components/Episodes";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Podcast from "../../components/Podcast";


export default function Home() {
  return (
    <div className="w-11/12 mx-auto text-[#14142B]">
      <Navbar/>
      <Hero/>
      <Podcast/>
      <Episodes/>
      <Articles/>
    </div>
  )
}
