import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { faqData, faqOthers } from '../data/faq';

const FaqQuestion = ({ allowMultiple = false }) => {
  const [openMainIdx, setOpenMainIdx] = useState([]); 
  const [openOtherIdx, setOpenOtherIdx] = useState([]);
  const isMainOpen = (idx) => 
    allowMultiple ? openMainIdx.includes(idx) : openMainIdx[0] === idx;

  const isOtherOpen = (idx) => 
    allowMultiple ? openOtherIdx.includes(idx) : openOtherIdx[0] === idx;

  const toggleMain = (idx) => {
    if (allowMultiple) {
      setOpenMainIdx(prev =>
        prev.includes(idx)
          ? prev.filter(i => i !== idx)
          : [...prev, idx]
      );
    } else {
      setOpenMainIdx(prev => (prev[0] === idx ? [] : [idx]));
    }
  };

  const toggleOther = (idx) => {
    if (allowMultiple) {
      setOpenOtherIdx(prev =>
        prev.includes(idx)
          ? prev.filter(i => i !== idx)
          : [...prev, idx]
      );
    } else {
      setOpenOtherIdx(prev => (prev[0] === idx ? [] : [idx]));
    }
  };

  return (
    <div className="flex flex-col gap-1 md:max-w-[60%]   p-5 ">
      {/* First FAQ Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#4c1d29] p-3 rounded-sm">
            <FaQuestion className="md:w-8 w-6 md:h-8 h-6 text-white border-2 border-white rounded-full p-1" />
          </div>
          <h1 className="md:text-3xl text-2xl font-[Playball] text-[#4c1d29] font-bold">
            F.A.Qs
          </h1>
        </div>

        <dl className="space-y-3">
          {faqData.map((item, i) => {
            const isOpen = isMainOpen(i);

            return (
              <div
                key={i}
                className="border-2 border-gray-300 rounded-lg overflow-hidden"
              >
                <dt className={isOpen ? "bg-[#4c1d29] text-white  border-[#4c1d29]" : "bg-white"}>
                  <button
                    onClick={() => toggleMain(i)}
                    aria-expanded={isOpen}
                    aria-controls={`main-faq-${i}`}
                    className="w-full flex justify-between items-center p-5 text-left font-medium transition-all"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 bg-gray-300 rounded-full ${
                        isOpen ? "rotate-180 bg-white text-[#4c1d29] rounded-full" : ""
                      }`}
                    />
                  </button>
                </dt>

                <dd
                  id={`main-faq-${i}`}
                  className={`transition-all duration-500 ease-in-out overflow-hidden  ${
                    isOpen ? "max-h-96 p-5 bg-white border-2 rounded-b-md border-[#4c1d29]" : "max-h-0"
                  }`}
                >
                  <div className="text-gray-700 leading-relaxed p-5  ">{item.a}</div>
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      {/* Other Questions */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#4c1d29] p-3 rounded-sm">
            <FaQuestion className="md:w-8 w-6 md:h-8 h-6 text-white border-2 border-white rounded-full p-1" />
          </div>
          <h1 className=" text-2xl md:text-4xl tracking-wide font-[Playball] text-[#4c1d29] font-semibold">
            Other questions
          </h1>
        </div>

        <dl className="space-y-3">
          {faqOthers.map((item, i) => {
            const isOpen = isOtherOpen(i);

            return (
              <div
                key={i}
                className="border-2 border-gray-300 rounded-lg overflow-hidden"
              >
                <dt className={isOpen ? "bg-[#4c1d29] text-white border-[#4c1d29]" : "bg-white"}>
                  <button
                    onClick={() => toggleOther(i)}
                    aria-expanded={isOpen}
                    aria-controls={`other-faq-${i}`}
                    className="w-full flex justify-between items-center p-5 text-left font-medium transition-all"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 bg-gray-300 rounded-full ${
                        isOpen ? "rotate-180 bg-white text-[#4c1d29] rounded-full" : ""
                      }`}
                    />
                  </button>
                </dt>

                <dd
                  id={`other-faq-${i}`}
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 p-5 bg-white border-2 rounded-b-md border-[#4c1d29]" : "max-h-0"
                  }`}
                >
                  <div className="text-gray-700 leading-relaxed p-5">{item.a}</div>
                </dd>
              </div>
            );
          })}
        </dl>
      </section>
    </div>
  );
};

export default FaqQuestion;