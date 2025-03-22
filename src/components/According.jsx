import React, { useState } from "react";

const According = () => {
  const data = [
    {
      id: 1,
      title: "What services do you offer?",
      desc: "We provide web development, mobile app development, custom software solutions, UI/UX design, API development, and cloud deployment services",
    },
    {
      id: 2,
      title: "How long does it take to develop a software solution?",
      desc: "The development time depends on the project’s complexity. A basic website can take 10-15 days, while a full-scale software solution may take 1-3 months",
    },
    {
      id: 3,
      title: "Do you offer ongoing support and maintenance?",
      desc: "Yes! We provide post-launch support, bug fixes, updates, and maintenance services based on your selected plan.",
    },
    {
      id: 4,
      title: "Can I request custom features for my project?",
      desc: "Absolutely! We specialize in custom software solutions tailored to your specific business needs",
    },
    {
      id: 5,
      title: "What technologies do you use?",
      desc: "We use modern technologies like JavaScript (React, Node.js), Python, PHP, Laravel, and cloud platforms like AWS and Firebase",
    },
    {
      id: 6,
      title: "How do you ensure software security?",
      desc: "We implement SSL encryption, data protection measures, and best security practices to safeguard your software",
    },
    {
      id: 7,
      title: "Do you provide SEO optimization for websites?",
      desc: "Yes, we offer SEO optimization to improve search rankings and online visibility",
    },
    {
      id: 8,
      title: "How can I get a quote for my project?",
      desc: "Simply contact us with your project details, and we will provide a customized quote based on your requirements.",
    },
  ];

  const [accordingOpen, setAccordingOpen] = useState(null);
  const handleAccording = (id) => {
    if (accordingOpen === id) {
      setAccordingOpen(null);
    } else {
      setAccordingOpen(id);
    }
  };

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-xl md:text-4xl font-bold text-white text-center italic">
          FAQ Questions
        </h2>

        {/* according */}
        <div className="py-10 text-white">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-black-950 flex flex-col px-4 py-2 "
            >
              <div></div>
              <div className="bg-[#0f0e0e] px-4 py-3 rounded-lg border-1 border-white/20">
                <button
                  onClick={() => handleAccording(item.id)}
                  className="flex justify-between items-start md:items-center w-full cursor-pointer gap-3 "
                >
                  <span className="text-white text-xl font-semibold italic">
                    {item.title}
                  </span>
                  {accordingOpen === item.id ? (
                    <span className="">-</span>
                  ) : (
                    <span className="">+</span>
                  )}
                </button>
                <div
                  className={`mt-2 grid overflow-hidden text-sm text-gray-400 transition-all duration-300 ease-in-out
                    ${
                      accordingOpen === item.id
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <p className="overflow-hidden">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default According;
