import React from 'react';

const HeaderDrowerMenu = () => {
    return (
        <div>
            <div className="">
                {/* Category Filters */}
                <div className="filter ">
                    <ul
                        role="tablist"
                        aria-label="Filter by category"
                        className="flex space-x-4 px-2 overflow-x-auto"
                    >
                        <li role="presentation" className="min-w-max border-b-2 border-black">
                            <a
                                href="#"
                                id="all-categories"
                                role="tab"
                                aria-selected="true"
                                className="text-black font-semibold"
                            >
                                All
                            </a>
                        </li>
                        <li role="presentation" className="min-w-max">
                            <a href="#" id="category-0" role="tab" className="text-gray-600">
                                Middle East & Africa
                            </a>
                        </li>
                        <li role="presentation" className="min-w-max">
                            <a href="#" id="category-1" role="tab" className="text-gray-600">
                                Asia-Pacific
                            </a>
                        </li>
                        <li role="presentation" className="min-w-max">
                            <a href="#" id="category-2" role="tab" className="text-gray-600">
                                Europe
                            </a>
                        </li>
                        <li role="presentation" className="min-w-max">
                            <a href="#" id="category-3" role="tab" className="text-gray-600">
                                The Americas
                            </a>
                        </li>
                        <li role="presentation" className="min-w-max">
                            <a href="#" id="category-4" role="tab" className="text-gray-600">
                                Residences
                            </a>
                        </li>
                        <li role="presentation" className="min-w-max">
                            <a href="#" id="category-5" role="tab" className="text-gray-600">
                                Partners
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default HeaderDrowerMenu;