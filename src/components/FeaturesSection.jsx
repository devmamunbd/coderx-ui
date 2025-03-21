import React from "react";
import { FiBarChart, FiLayout, FiServer, FiUploadCloud } from "react-icons/fi";
import { FaCloud, FaFigma } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import { MdDashboardCustomize } from "react-icons/md";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: "Design and build",
      description:
        "Designers can take control of HTML, CSS, and JavaScript in a visual canvas — while marketers can work with pre-made, design-approved building blocks.",
      link: "#design-build",
    },
    {
      icon: <FiUploadCloud className="w-8 h-8" />,
      title: " Custom Software Development",
      description:
        " We build tailored software solutions that align perfectly with your business goals, ensuring high performance and efficiency",
      link: "#publish-edit",
    },
    {
      icon: <FiBarChart className="w-8 h-8" />,
      title: "Analyze and optimize",
      description:
        "Transform your site into your most valuable marketing asset with native tools for AI-powered personalization, A/B testing, SEO, localization, and more.",
      link: "#analyze-optimize",
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: "Scale and collaborate",
      description:
        "15,000 websites are published every hour. Confidently scale your site with tools for hosting, security, compliance, and publishing — plus connect to your tech stack with integrations and APIs.",
      link: "#scale-collaborate",
    },
    {
      icon: <FaFigma className="w-8 h-8" />,
      title: "UI/UX Design Excellence ",
      description:
        "We craft visually appealing and highly intuitive interfaces that improve user engagement and satisfaction.",
      link: "#design-excellence",
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud-Based Solutions",
      description:
        "Scalable, flexible, and secure cloud solutions that enhance business operations and data accessibility from anywhere.",
      link: "#cloud-solutions",
    },
    {
      icon: <GiArtificialHive className="w-8 h-8" />,
      title: "AI & Process Automation",
      description:
        " We integrate artificial intelligence and automation to optimize workflows, reduce manual effort, and boost productivity",
      link: "#ai-automation",
    },
    {
      icon: <MdDashboardCustomize className="w-8 h-8" />,
      title: "E-commerce & CMS Solutions",
      description:
        "We develop high-performing online stores and content management systems that empower businesses to grow and manage their digital presence efficiently",
      link: "#e-commerce-cms",
    },
  ];
  return (
    <div className="bg-primary py-8 md:py-16">
      <div className="container mx-auto text-white px-4 sm:px-6">
        <h2 className="text-xl md:text-2xl text-white font-bold text-center uppercase mb-10 italic">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {features?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-white border-t border-white/20 pt-8 space-y-2"
            >
              <div className="text-green-500">{item.icon}</div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-gray-500 mb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
