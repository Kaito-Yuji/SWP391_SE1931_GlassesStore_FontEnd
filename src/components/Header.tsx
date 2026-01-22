import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiChevronDown } from 'react-icons/fi';

const Header: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const cartCount = 0;

    const menuItems = [
        { label: 'KÍNH RAYBAN', hasDropdown: true },
        { label: 'KÍNH MÁT', hasDropdown: false },
        { label: 'GỌNG KÍNH', hasDropdown: false },
        { label: 'TRÒNG KÍNH', hasDropdown: false },
        { label: 'THƯƠNG HIỆU', hasDropdown: false },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
                <div className="w-full">
                    <div className="flex items-center justify-between h-20 px-8">

                        {/* Main Navigation - Center */}
                        <div className="flex items-center gap-16 flex-1 justify-center px-8">
                            {menuItems.map((item, index) => (
                                <div key={index} className="group relative">
                                    <button className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors py-2 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap">
                                        <span>{item.label}</span>
                                        {item.hasDropdown && (
                                            <FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                        )}
                                    </button>

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && (
                                        <div className="absolute left-0 top-full hidden group-hover:block bg-white rounded-md shadow-lg w-48 py-2 border border-gray-100 z-10">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                                                Rayban Classic
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                                                Rayban Aviator
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                                                Rayban Wayfarer
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-6 ml-auto flex-shrink-0 min-w-fit">

                            {/* Search Bar */}
                            <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    className="bg-gray-50 text-sm text-gray-700 placeholder-gray-500 focus:outline-none w-40"
                                />
                                <FiSearch className="w-5 h-5 text-gray-400 ml-2" />
                            </div>

                            {/* User Account */}
                            <button className="text-gray-700 hover:text-red-600 transition-colors p-1">
                                <FiUser className="w-6 h-6" />
                            </button>

                            {/* Cart */}
                            <button className="relative text-gray-700 hover:text-red-600 transition-colors p-1">
                                <FiShoppingCart className="w-6 h-6" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            {/* Language Switcher */}
                            <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
                                <img src="https://flagcdn.com/w40/vn.png" alt="VN" className="w-5 h-4 cursor-pointer hover:opacity-80" />
                                <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-5 h-4 cursor-pointer hover:opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Announcement Bar */}
            <div className="bg-red-50 border-t border-red-100">
                <div className="w-full px-8 py-2 text-center">
                    <p className="text-sm font-semibold text-gray-800">
                        CLEARANCE: LAST CHANCE FOR UP TO 50% OFF SELECTED FRAMES & LENSES
                    </p>
                </div>
            </div>
        </>
    );
};

export default Header;
