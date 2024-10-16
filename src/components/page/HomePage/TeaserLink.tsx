import React from "react";
import Link from "next/link";

const TeaserLink = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse mb-10 mt-5 bg-[#f5f5f5]">
            <div className="w-1/2">
                <img
                    alt="Make Your Stay Even Better."
                    src="https://photos.mandarinoriental.com/is/image/MandarinOriental/abu-dhabi-beach-cabanas-dusk?wid=1280&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0"
                    className=""
                />
            </div>
            <div className="flex justify-center items-center flex-1 ml-2 md:ml-10">
                <div>
                    <h3 style={{ fontFamily: "Times New Roman, serif" }}  className="text-3xl md:text-6xl mb-3 md:mb-5 text-[#242021] ">
                        Make Your Stay Even Better.
                    </h3>
                    <div className="teaser-link-description w-4/5 text-base leading-6 text-[#242021]">
                        By becoming a Fan of M.O., you can now enjoy complimentary WiFi,
                        members-only offers and a welcome amenity every time you stay with us,
                        wherever that may be.
                    </div>
                    <div className="teaser-link-ctas flex space-x-4 mt-4">
                        <Link href="/en/fans-of-mo/benefits-enrolment" passHref>
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Why Join?</button>
                        </Link>
                        <Link href="/en/fans-of-mo/login" passHref>
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Become a Fan</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeaserLink;
