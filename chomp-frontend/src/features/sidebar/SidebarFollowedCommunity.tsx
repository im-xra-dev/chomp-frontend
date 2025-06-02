import { Link } from 'react-router-dom';
import { Community } from '../../types';

type SidebarFollowedCommunityProps = {
  comm: Community;
  isOpen: boolean;
};

export function SidebarFollowedCommunity({ comm, isOpen }: SidebarFollowedCommunityProps) {
  return (
    <li className="flex items-center space-x-3">
      <Link
        to={`/community/${comm.id}`}
        className={`user-link group flex items-center space-x-3 rounded-lg hover:bg-gray-700 transition-all duration-300 ${
          isOpen ? 'p-1 w-full' : 'p-2 ml-1 justify-center'
        }`}
      >
        <img
          src={comm.profilePicture}
          alt={`${comm.name}'s community`}
          className={`rounded-full object-cover transition-all duration-300 ${
            isOpen ? 'w-8 h-8' : 'w-10 h-10'
          }`}
        />
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? 'opacity-100 max-w-[200px] ml-2' : 'opacity-0 max-w-0'
          }`}
        >
          <span className="text-white whitespace-nowrap">{comm.name}</span>
        </div>
      </Link>
    </li>
  );
}
