import { useState } from "react";
import { FaBox, FaTags, FaTruck, FaGift } from "react-icons/fa";

const images = [
  {
    id: 1,
    src: "https://oxopackaging.com/assets/categories/custom-two-piece-rigid-boxes-Wholesale-Category.webp", // Replace with actual URL
    alt: "Black Box Packaging",
    name: "Rigid Boxes"
  },
  {
    id: 2,
    src: "https://oxopackaging.com/assets/categories/custom-two-piece-rigid-boxes-Wholesale-Category.webp", // Replace with actual URL
    alt: "Transparent Lid Boxes",
    name: "Labels & Stickers"
  },
  {
    id: 3,
    src: "https://oxopackaging.com/assets/categories/custom-two-piece-rigid-boxes-Wholesale-Category.webp", // Replace with actual URL
    alt: "Custom Carry Boxes",
    name: "Custom Carry Boxes"
  },
  {
    id: 4,
    src: "https://oxopackaging.com/assets/categories/custom-two-piece-rigid-boxes-Wholesale-Category.webp", // Replace with actual URL
    alt: "Gradient Gift Box",
    name: "Gradient Gift Box"
  },
  {
    id: 4,
    src: "https://oxopackaging.com/assets/categories/custom-two-piece-rigid-boxes-Wholesale-Category.webp", // Replace with actual URL
    alt: "Gradient Gift Box",
    name: "Gradient Gift Box"
  },
  {
    id: 4,
    src: "https://oxopackaging.com/assets/categories/custom-two-piece-rigid-boxes-Wholesale-Category.webp", // Replace with actual URL
    alt: "Gradient Gift Box",
    name: "Gradient Gift Box"
  },
  {
    id: 4,
    src: "https://oxopackaging.com/assets/categories/custom-two-piece-rigid-boxes-Wholesale-Category.webp", // Replace with actual URL
    alt: "Gradient Gift Box",
    name: "Gradient Gift Box"
  },
  {
    id: 4,
    src: "https://oxopackaging.com/assets/categories/custom-two-piece-rigid-boxes-Wholesale-Category.webp", // Replace with actual URL
    alt: "Gradient Gift Box",
    name: "Gradient Gift Box"
  },
];

const services = [
  { id: 1, icon: <FaBox size={30} />, title: "Packaging Audit", description: "Identify and analyze your current packaging and spot areas of improvement for your packaging." },
  { id: 2, icon: <FaTags size={30} />, title: "Packaging Strategy", description: "Collaborate and develop a tailored packaging strategy with our specialists to meet your needs and goals." },
  { id: 3, icon: <FaTruck size={30} />, title: "Cost Optimization", description: "Save more on your custom packaging with cost-optimized strategies like material alternatives, reduction, and supply chain optimization." },
  { id: 4, icon: <FaGift size={30} />, title: "Supply Chain Optimization", description: "Analyze and improve your existing supply chain for the most efficient procurement network." },
];


;
export default function PackagingGallery() {
  return (
    <section className="bg-white  dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container  max-w-screen-xl mx-auto py-10 text-center px-4">
        <h1 className="text-3xl font-bold">YOUR CUSTOM PACKAGING PARTNER</h1>
        <p className="mt-2 text-lg max-w-2xl mx-auto">
          We provide you the best packaging solutions with customized printed box service, 
          which matches your industry and product-specific needs.
        </p>
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
  {images.map((image) => (
    <div
      key={image.id}
      className="p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full rounded-lg transform transition duration-300 hover:scale-105 hover:rounded-2xl"
      />
      <h3 className="mt-2 text-lg font-semibold">{image.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">Request a Quote</p>
    </div>
  ))}
</div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {services.map((service) => (
            <div key={service.id} className="p-6 rounded-lg bg-green-100 dark:bg-gray-800 text-center shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <div className="text-green-600 dark:text-green-300 mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
}
