import React from "react";

const MastheadNav: React.FC = () => {
  return (
    <div className="container grid grid-cols-8 absolute bottom-4 w-full overflow-x-auto z-3">
      {navItems.map((item) => (
        <a
          key={item.title}
          href={item.href}
          target={item.target}
          className="flex flex-col items-center m-2 transition-all duration-300 hover:scale-105"
        >
          <div className="flex flex-col items-center hover:text-[#c7b998]">
            <div className="w-12 h-12 transition-transform duration-300 ease-in-out transform hover:scale-125">
              <img src={item.imgSrc} alt={`${item.title} icon`} />
            </div>
            <div className="text-center text-sm mt-2 font-semibold text-white transition-colors duration-300 ease-in-out">
              {item.title}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

const navItems = [
  {
    href: "/en/stay",
    target: "_self",
    imgSrc:
      "https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-stay.svg",
    title: "Stay",
  },
  {
    href: "/en/residences",
    target: "_self",
    imgSrc:
      "https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-residences.svg",
    title: "Residences",
  },
  {
    href: "/en/dine",
    target: "_self",
    imgSrc:
      "https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-dine.svg",
    title: "Dine",
  },
  {
    href: "/en/spa",
    target: "_self",
    imgSrc:
      "https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-spa.svg",
    title: "Spa",
  },
  {
    href: "/en/explore",
    target: "_self",
    imgSrc:
      "https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-explore.svg",
    title: "Explore",
  },
  {
    href: "/en/celebrate",
    target: "_self",
    imgSrc:
      "https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-celebrate.svg",
    title: "Celebrate",
  },
  {
    href: "/en/meet",
    target: "_self",
    imgSrc:
      "https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-meet.svg",
    title: "Meet",
  },
  {
    href: "/en/shop",
    target: "_self",
    imgSrc:
      "https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-shop.svg",
    title: "Shop",
  },
];

export default MastheadNav;
