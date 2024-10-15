import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-4 sm:px-10">
            <div className="footer-top flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-7">
                {/* Logo Section */}
                <div className="logo mb-6 lg:mb-0">
                    <img
                        src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Corporate/Logos/logo-brand-vertical.svg?fmt=png-alpha&bgColor=255,0,0,0"
                        alt="Logo"
                        className="w-32"
                    />
                </div>
                {/* Location Section */}
                <div className="footer-top-group text-center lg:text-left">
                    <div className="location text-lg font-semibold mb-2">
                        Mandarin Oriental Hotel Group
                    </div>
                    <div className="footer-top-group-links space-y-2">
                        <div>
                            <span>8th Floor, One Island East, Taikoo Place 18 Westlands Road, Quarry Bay, Hong Kong</span>
                        </div>
                        <div>
                            <a href="/en/contact-information" target="_self" className="text-blue-400 hover:underline">
                                View All Toll-Free Reservation Numbers
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Middle */}
            <div className="footer-middle mt-7">
                <div className="footer-middle-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {/* Quick Links Column */}
                    <div className="quick-links">
                        <div className="quick-links-title font-semibold text-lg mb-4">Corporate</div>
                        <ul role="list" aria-label="Corporate" className="space-y-2">
                            <li><a href="/en/our-company" target="_self" className="hover:underline">Our Company</a></li>
                            <li><a href="/en/omo-alliance" target="_self" className="hover:underline">The O&amp;MO Alliance</a></li>
                            <li><a href="/en/contact-information" target="_self" className="hover:underline">Corporate Contacts</a></li>
                            <li><a href="https://mandarinoriental.com/contact-information#regional-sales-offices" target="_self" className="hover:underline">Regional Sales Offices</a></li>
                            <li><a href="/en/our-company/sustainability" target="_self" className="hover:underline">Sustainability</a></li>
                            <li><a href="/en/investors" target="_self" className="hover:underline">Investors</a></li>
                            <li><a href="/en/careers" target="_self" className="hover:underline">Careers</a></li>
                            <li><a href="/en/fan-club" target="_self" className="hover:underline">Travel Agents</a></li>
                        </ul>
                    </div>
                    {/* Additional quick links columns */}
                    <div className="quick-links">
                        <div className="quick-links-title font-semibold text-lg mb-4">Explore</div>
                        <ul role="list" aria-label="Explore" className="space-y-2">
                            <li><a href="/en/shop" target="_self" className="hover:underline">Gift Cards</a></li>
                            <li><a href="/en/residences" target="_self" className="hover:underline">Residences</a></li>
                            <li><a href="/en/offers/best-rate-promise" target="_self" className="hover:underline">Best Rate Promise</a></li>
                            <li><a href="/en/media-centre" target="_self" className="hover:underline">Media Centre</a></li>
                            <li><a href="https://na.shopmo.com/index.aspx" target="_self" className="hover:underline">Shop MO</a></li>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <div className="quick-links-title font-semibold text-lg mb-4">Support</div>
                        <ul role="list" aria-label="Support" className="space-y-2">
                            <li><a href="/en/contact-information" target="_self" className="hover:underline">Contact Us</a></li>
                            <li><a href="/en/fans-of-mo/login" target="_self" className="hover:underline">Fans of M.O. Login</a></li>
                            <li><a href="https://be.synxis.com/signin?chain=507" target="_blank" className="hover:underline">Modify/Cancel Reservation</a></li>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <div className="quick-links-title font-semibold text-lg mb-4">Connect</div>
                        <ul role="list" aria-label="Connect" className="space-y-2">
                            <li><a href="https://www.facebook.com/MandarinOriental" target="_blank" className="hover:underline">Facebook</a></li>
                            <li><a href="https://www.instagram.com/mo_hotels/" target="_blank" className="hover:underline">Instagram</a></li>
                            <li><a href="http://weibo.com/mandarinoriental001" target="_blank" className="hover:underline">Weibo</a></li>
                            <li><a href="https://www.youtube.com/MOHotels?feature=watch" target="_blank" className="hover:underline">YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom mt-7 border-t border-gray-700 pt-4">
                <div className="utility-nav text-center">
                    <div className="utility-nav-title text-sm">&copy; 2024 Mandarin Oriental Hotel Group Limited</div>
                    <ul role="list" className="utility-nav-wrapper flex justify-center space-x-4 mt-2">
                        <li><a href="/en/privacy-policy" target="_self" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/en/cookie-policy" target="_self" className="hover:underline">Ad &amp; Cookie Policy</a></li>
                        <li><a href="/en/legal-notices" target="_self" className="hover:underline">Legal Notices</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;