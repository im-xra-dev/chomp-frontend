import * as React from 'react';
import { SideBar } from '../features/sidebar/SideBar';
import { PostFeed } from '../features/post-feed/PostFeed';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => setIsSidebarOpen((open) => !open);

  return (
    <div className="flex w-full min-h-screen">
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Content area */}
      <div
        className="flex flex-1 justify-center transition-all duration-300"
        style={{
          marginLeft: isSidebarOpen ? 320 : 104, // Same widths as sidebar
        }}
      >
        {/* Constrain post feed max width, center it */}
        <div className="w-full max-w-4xl px-4">
          <PostFeed />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
