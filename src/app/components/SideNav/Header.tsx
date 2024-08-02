'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <Link href="/" className="flex ml-2 md:mr-24">
                            <span className="self-center text-xl font-semibold sm:text-2xl">
                                Sprightly
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center"></div>
                    <div className="relative items-center ml-3">
                        <div>
                            <button
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                                onClick={() => {
                                    setShowDropdown(!showDropdown);
                                }}
                            >
                                <span className="sr-only">Open user menu</span>
                                <Image
                                    className="w-8 h-8 rounded-full"
                                    src=""
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </button>
                        </div>
                        {showDropdown && (
                            <div className="z-50 right-0 absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow">
                                <div className="px-4 py-3">
                                    <p className="text-sm text-gray-900">
                                        USER NAME
                                    </p>
                                    <p className="text-sm text-gray-900 font-medium truncate">
                                        USER email
                                    </p>
                                </div>
                                <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
