import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProductSlider() {
  const products = [
    { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png', name: 'Smartphone X' },
    { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png', name: 'Wireless Earbuds' },
    { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png', name: '4K Camera' },
    { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png', name: 'Smart Watch' },
    { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png', name: 'Gaming Console' },
    { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png', name: 'Bluetooth Speaker' },
    { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png', name: 'VR Headset' },
    { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png', name: 'Drone Pro' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1536,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="p-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold dark:text-gray-100">Our Products</h2>
        </div>

        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-2 group">
              <div className="w-full rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 bg-white dark:bg-gray-800 overflow-hidden">
                {/* Image Container */}
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                  />
                </div>
                
                {/* Product Info Below Image */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Starting from $299
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}