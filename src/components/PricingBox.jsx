import React from "react";

const PricingBox = () => {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-xl md:text-4xl font-bold text-white italic text-center mb-5">
          Pricing Box
        </h2>

        {/* pricing-box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
          {/* first-box */}
          <div
            data-aos="fade-right"
            className="bg-primary hover:bg-gray-950 transition-all duration-150 ease-in-out cursor-pointer px-4 py-4 border-1 border-white/10 rounded-md"
          >
            <h3 className="text-white text-xl md:text-2xl font-bold mb-5">
              💡 Basic Plan
            </h3>
            <p className="text-white mb-6 text-xs md:text-xl italic font-semibold">
              Price: $499/<sub>month</sub>
            </p>
            <ul className="list-none text-white/80 space-y-3 text-sm">
              <li>
                ✔ Custom website or software development (up to 5 pages/modules)
              </li>
              <li>✔ Responsive design (mobile-friendly)</li>
              <li>✔ Basic UI/UX design</li>
              <li>✔ Standard security implementation</li>
              <li>✔ 1 revision included</li>
              <li>✔ Delivery in 10-15 days</li>
              <li>✔ Email & chat support</li>
            </ul>
          </div>

          {/* second-box */}
          <div
            data-aos="zoom-in-up"
            className="bg-primary hover:bg-gray-950 transition-all duration-150 ease-in-out cursor-pointer px-4 py-4 border-1 border-white/10 rounded-md"
          >
            <h3 className="text-white text-xl md:text-2xl font-bold mb-5">
              🚀 Standard Plan
            </h3>
            <p className="text-white mb-6 text-xs md:text-xl italic font-semibold">
              Price: $999/<sub>month</sub>
            </p>
            <ul className="list-none text-white/80 space-y-3 text-sm">
              <li>✔ Everything in the Basic Plan, plus:</li>
              <li>✔ Advanced UI/UX design with animations</li>
              <li>✔ Database integration (MySQL, MongoDB, etc.)</li>
              <li>✔ API development & third-party integration</li>
              <li>✔ SEO optimization</li>
              <li>✔ 3 revisions included</li>
              <li>✔ Delivery in 20-25 days</li>
            </ul>
          </div>

          {/* third-box */}
          <div
            data-aos="fade-left"
            className="bg-primary  hover:bg-gray-950 transition-all duration-150 ease-in-out cursor-pointer px-4 py-4 border-1 border-white/10 rounded-md"
          >
            <h3 className="text-white text-xl md:text-2xl font-bold mb-5">
              🔥 Premium Plan
            </h3>
            <p className="text-white mb-6 text-xs md:text-xl italic font-semibold">
              💰 Price: $1999/<sub>month</sub>
            </p>
            <ul className="list-none text-white/80 space-y-3 text-sm">
              <li>✔ Everything in the Standard Plan, plus:</li>
              <li>✔ Full-scale web or mobile application</li>
              <li>✔ AI & automation features</li>
              <li>✔ Cloud hosting & deployment support</li>
              <li>✔ Security enhancements (SSL, data encryption)</li>
              <li>✔ Performance optimization & scalability</li>
              <li>✔ Dedicated account manager & 24/7 support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
