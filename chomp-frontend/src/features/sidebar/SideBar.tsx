import * as React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is from 'react-router-dom' to handle routing
import { useState } from 'react';
import { useEffect } from 'react';
import { SidebarFollowedCommunity } from './SidebarFollowedCommunity';
import { SidebarFollowedUser } from './SidebarFollowedUser';

import { dummyUsers } from '../../data/dummyUsers';
import { dummyCommunities } from '../../data/dummyCommunities';

import sidebarEdgeImage from "../../assets/images/sidebar-edge-2.png";

import { useHeaderHeight } from '../../hooks/useHeaderHeight';

interface SideBarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
  }

export function SideBar({ isOpen, toggleSidebar }: SideBarProps) {
    // const [isOpen, setIsOpen] = useState(true);
    // const toggleSidebar = () => setIsOpen(!isOpen);
    const headerHeight = useHeaderHeight();

    // useEffect(() => {
    //     const handleResize = () => {
    //       if (window.innerWidth < 768) {
    //         setIsOpen(false);
    //       } else {
    //         setIsOpen(true);
    //       }
    //     };
      
    //     handleResize(); // check on mount
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    //   }, []);

    return (

        <div
        id="side-bar"
        style={{
            top: `${headerHeight}px`,
            height: `calc(100vh - ${headerHeight}px)`,
        }}
        className={`fixed left-0 ${
            isOpen ? 'w-72' : 'w-26'
        } transition-width duration-300 z-20 p-4 pr-5 bg-black`}
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
                    <ul>
                    {dummyUsers.map((user) => (
                    <SidebarFollowedUser key={user.id} user={user} isOpen={isOpen} />
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
                    <ul>
                    {dummyCommunities.map((comm) => (
                    <SidebarFollowedCommunity key={comm.id} comm={comm} isOpen={isOpen} />
                    ))}
                    </ul>
                </div>
                <div className="bg-white h-0.5 w-auto rounded-md mt-2 mb-2"/>
            </nav>
        </div>
    );
}
