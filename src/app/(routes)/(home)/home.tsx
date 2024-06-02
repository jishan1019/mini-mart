"use client";
import Footer from "../(shared)/(home)/footer";
import Header from "../(shared)/(home)/header";
import Category from "./category";
import Cover from "./cover";

export default function HomePage() {
  return (
    <Header>
      <Cover />
      <Category />
      <Footer className="mt-24 sm:mt-96" />
    </Header>
  );
}
