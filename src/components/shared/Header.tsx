import React from 'react';

const Header = () => {
    return (
        <div className="bg-black text-[#ceb780] h-[35px] flex flex-col justify-center">
            <div className="px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/en" className="flex items-center">
                                    <span className="icon-home icon" />
                                    <span className="ml-1 text-sm font-semibold">Global Home</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center space-x-4 text-sm font-medium">
                        <div className="relative">
                            <div className="modal-activator drawer-variant no-scroll">
                                <button className="flex items-center bg-transparent border-none cursor-pointer">
                                    <span className="text-sm">Our Hotels &amp; Resorts</span>
                                    <em className="icon-search icon ml-2" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="greeting-sign-in">
                                <a href="/en/fans-of-mo/login" itemProp="url" className="flex items-center">
                                    <span
                                        aria-label="Sign In / Join Now"
                                        className="greeting-text"
                                    >
                                        Sign In / Join Now
                                    </span>
                                    <em className="icon-signin-white person-icon ml-2" />
                                </a>
                            </div>
                        </div>
                        <div className="modal-activator drawer-variant no-scroll">
                            <div className="lang-bar lang">
                                <button className="flex items-center">
                                    <span className="icon-globe lang-icon" />
                                    <span className="lang-label ml-1">Languages</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;