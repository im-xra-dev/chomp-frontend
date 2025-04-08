import * as React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is from 'react-router-dom' to handle routing
import { useState } from 'react';
import { useEffect } from 'react';

import johnImage from '../assets/images/john.png';
import janeImage from '../assets/images/jane.png';
import aliceImage from '../assets/images/alice.jpg';
import bobImage from '../assets/images/bob.jpg';

import sidebarEdgeImage from "../assets/images/sidebar-edge-2.png";

const dummyUsers = [
    { id: 1, name: "John Doe", profilePicture: johnImage },
    { id: 2, name: "Jane Smith", profilePicture: janeImage },
    { id: 3, name: "Alice Johnson", profilePicture: aliceImage },
    { id: 4, name: "Bob Brown", profilePicture: bobImage },
];

const dummyCommunities = [
    { id: 1, name: "TapasConsumers", profilePicture: johnImage },
    { id: 2, name: "Easy Breakfast", profilePicture: janeImage },
    { id: 3, name: "Weekly Planning", profilePicture: aliceImage },
    { id: 4, name: "Vegan Prepping", profilePicture: bobImage },
]

export function SideBar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        };
      
        handleResize(); // check on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <div
            id="side-bar"
            className={`h-screen ${
                isOpen ? 'w-80' : 'w-26'
            } relative transition-all duration-300 z-10 p-4 pr-5 bg-black`}
        >
            <button
                onClick={toggleSidebar}
                className="w-17 text-white text-xl mb-6 focus:outline-none bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 overflow-hidden"
                >
                {isOpen ? '←' : '→'}
            </button>

            {/* Rough edge image */}
            <img
            src={sidebarEdgeImage}
            alt=""
            className="z-20 absolute top-0 -right-17 h-full w-[69px]"
            />

            <nav>
                <div>
                    <div
                    className={`transition-all duration-300 overflow-hidden ${
                        isOpen ? 'opacity-100 max-h-10 mb-2' : 'opacity-0 max-h-0 mb-0'
                    }`}
                    >
                        <Link
                        to='home-feed'
                        className='p-3 user-link group flex items-center space-x-3 rounded-lg hover:bg-gray-700'
                        >
                        <h2 className="text-white text-lg">Home Feed</h2>
                        </Link>
                    </div>
                    <div className="bg-white h-0.5 w-auto rounded-md mt-2 mb-2"/>
                    <div
                    className={`transition-all duration-300 overflow-hidden ${
                        isOpen ? 'opacity-100 max-h-10 mb-2' : 'opacity-0 max-h-0 mb-0'
                    }`}
                    >
                        <h3 className="text-white text-lg">crEATors</h3>
                    </div>

                    {/* List of followed Creators */}
                    <ul className="">

                        {dummyUsers.map((user) => (
                            <li key={user.id} className="flex items-center space-x-3">
                                <Link
                                to={`/profile/${user.id}`}
                                className={`user-link group flex items-center space-x-3 rounded-lg hover:bg-gray-700 transition-all duration-300 ${
                                    isOpen ? 'p-3 w-full' : 'p-3 ml-1 justify-center '
                                }`}
                                >
                                <img
                                    src={user.profilePicture}
                                    alt={user.name}
                                    className={`rounded-full object-cover transition-all duration-300 ${isOpen ? 'w-8 h-8':'w-10 h-10'}`}
                                />
                                {/* Name collapses smoothly */}
                                <div
                                    className={`transition-all duration-300 overflow-hidden ${
                                    isOpen ? 'opacity-100 max-w-[200px] ml-2' : 'opacity-0 max-w-0'
                                    }`}
                                >
                                    <span className="text-white whitespace-nowrap">{user.name}</span>
                                </div>
                                </Link>

                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white h-0.5 w-auto rounded-md mt-2 mb-2"/>
                <div>
                    <div
                    className={`transition-all duration-300 overflow-hidden ${
                        isOpen ? 'opacity-100 max-h-10 mb-2' : 'opacity-0 max-h-0 mb-0'
                    }`}
                    >
                        <h3 className="text-white text-lg">Nommunities</h3>
                    </div>
                    {/* List of followed Communities */}
                    <ul className="">

                        {dummyCommunities.map((comm) => (
                            <li key={comm.id} className="flex items-center space-x-3">
                                <Link
                                to={`/profile/${comm.id}`}
                                className={`user-link group flex items-center space-x-3 rounded-lg hover:bg-gray-700 transition-all duration-300 ${
                                    isOpen ? 'p-3 w-full' : 'p-2 ml-1 justify-center '
                                }`}
                                >
                                <img
                                    src={comm.profilePicture}
                                    alt={comm.name}
                                    className={`rounded-full object-cover transition-all duration-300 ${isOpen ? 'w-8 h-8':'w-10 h-10'}`}
                                />
                                {/* Name collapses smoothly */}
                                <div
                                    className={`transition-all duration-300 overflow-hidden ${
                                    isOpen ? 'opacity-100 max-w-[200px] ml-2' : 'opacity-0 max-w-0'
                                    }`}
                                >
                                    <span className="text-white whitespace-nowrap">{comm.name}</span>
                                </div>
                                </Link>

                            </li>
                        ))}
                    </ul>

                </div>
                <div className="bg-white h-0.5 w-auto rounded-md mt-2 mb-2"/>
            </nav>
        </div>
    );
}
