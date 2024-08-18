import React from "react";
import ContactPage from "./contact-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page",
};

const page = () => {
  return <ContactPage />;
};

export default page;
