import React from "react";
import Link from "next/link";

// JSON data
const shopLinkData = {
  title: "Welcome to a World of Sleepfulness",
  description:
    "We believe that a restful night's sleep isn't just a luxury; it's a cornerstone of a fulfilling life. Our dedication to the art of sleep and its rituals has driven us to curate a bed and bedding collection that transcends ordinary rest.",
  image:
    "https://photos.mandarinoriental.com/is/image/MandarinOriental/shop-mo-bedding%20campaign-8?wid=1280&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
  cta: [
    {
      text: "Shop Now",
      link: "/en/fans-of-mo/benefits-enrolment"
    },
  ]
};

const ShopLink = () => {
  return (
    <div className="flex flex-col md:flex-row mb-10 mt-5 bg-[#f5f5f5]">
      <div className="w-1/2">
        <img
          alt={shopLinkData.title}
          src={shopLinkData.image}
          className=""
        />
      </div>
      <div className="flex justify-center items-center flex-1 ml-2 md:ml-10">
        <div>
          <h3
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-3xl md:text-6xl mb-3 md:mb-5 text-[#242021]"
          >
            {shopLinkData.title}
          </h3>
          <div className="teaser-link-description w-4/5 text-base leading-6 text-[#242021]">
            {shopLinkData.description}
          </div>
          <div className="teaser-link-ctas flex space-x-4 mt-4">
            {shopLinkData.cta.map((ctaItem, index) => (
              <Link href={ctaItem.link} passHref key={index}>
                <button
                  type="button"
                  className={`${
                    index === 1
                      ? "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100"
                      : "text-white bg-red-700 hover:bg-red-800"
                  } focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 mb-2`}
                >
                  {ctaItem.text}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLink;
