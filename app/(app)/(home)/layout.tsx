import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "./Footer";
import SearchFilters from "./search-filters";
import configPromise from "@payload-config"
import { getPayload } from "payload";

interface Props {
  children: React.ReactNode;
}
const HomeLayout = async ({ children }: Props) => {

  const payload = await getPayload({
        config: configPromise,
      })
  
      const data = await payload.find({
        collection: "categories",
        depth:1,
        where: {
          parent: {
            exists: false
          }
        }
      })
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={data}/>
      <div className="flex-1 bg-[#f4f4f0]">
      {children}
      </div>
      <Footer/>
    </div>
  );
};

export default HomeLayout;
