import { FaBox, FaTags, FaTruck, FaGift, FaPaintBrush } from "react-icons/fa";

const features = [
  { id: 1, icon: <FaBox size={30} />, title: "No Die & Plate Charges" },
  { id: 2, icon: <FaTruck size={30} />, title: "Quick Turnaround Time" },
  { id: 3, icon: <FaGift size={30} />, title: "Free Shipping" },
  { id: 4, icon: <FaBox size={30} />, title: "Starting from 50 Boxes" },
  { id: 5, icon: <FaTags size={30} />, title: "Customize Size & Style" },
  { id: 6, icon: <FaPaintBrush size={30} />, title: "Free Design Support" },
];

export default function PackagingFeatures() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-10">
      <div className="container  max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold">ONE PLACE TO GET YOUR CUSTOM PACKAGING</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          NexOn Packaging offers a variety of custom packaging solutions and project assistance with pricing and service you'll love.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center p-4 bg-green-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-green-300 dark:bg-green-600 rounded-full mb-4 text-white text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
