import Button from "components/button";
import type { NextPage } from "next";
import Hero from "components/hero";
import useDarkMode from "hooks/useDarkMode";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";
import Image from "next/image";

const links = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Posts",
    link: "/posts",
  },
  {
    text: "Uses",
    link: "/uses",
  },
  {
    text: "Snippets",
    link: "/snippets",
  },
];

const Home: NextPage = () => {
  const [theme, setTheme] = useDarkMode();
  return (
    <Layout navigation={<Navigation links={links} />} footer={<Footer />}>
      <div className="mt-24 space-y-44">
        <div className="space-y-6">
          <Hero />
          <button className="bg-pink-700 hover:bg-blue-light text-slate-50 font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-blue rounded">Start here</button>
        </div>
        {/* <div className="space-y-56">
          <h2 className="text-xl text-slate-700 dark:text-slate-200 font-bold my-2">Featured Posts</h2>
          <Image src="/image-1.jpg" width={400} height={400} className="object-cover" />
        </div> */}
      </div>
    </Layout>
  );
};

export default Home;
