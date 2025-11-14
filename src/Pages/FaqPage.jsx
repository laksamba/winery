import { useState } from "react";
import FaqQuestion from "../components/FaqComponents/FaqQuestion";
import FaqForm from "../components/FaqComponents/FaqForm";

const FaqPage = () => {

  return (
    <section className=" flex md:flex-row flex-col gap-10   my-8 justify-center " aria-labelledby="faq-title">
      {/* --------------------faq contents -------------------- */}
      <FaqQuestion />

      {/* -------------------side content---------------------------------- */}

      <FaqForm />
    </section>
  );
};

export default FaqPage;
