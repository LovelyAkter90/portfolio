import About from "@/componenets/About/About";
import Agency from "@/componenets/Agency/Agency";
import Blog from "@/componenets/Blog/Blog";
import Hero from "@/componenets/Hero/Hero";
import Layout from "@/componenets/Layout/layout";
import Partner from "@/componenets/Partner/Partner";
import Portfolio from "@/componenets/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Agency />
        <Portfolio />
        <Blog />
        <Partner />
      </Layout>
    </>
  );
}
