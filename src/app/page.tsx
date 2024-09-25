import homeImg from "../../public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
      <Hero imgData={homeImg}
      imgAlt="Car Factory"
      title="WELCOME TO FORD WHERE PERFECTION MEETS QUALITY..."
      />
     
  );
} 
