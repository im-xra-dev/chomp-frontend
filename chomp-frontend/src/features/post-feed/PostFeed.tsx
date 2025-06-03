import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PostItem } from './PostItem';
import { Post } from '../types';

export const PostFeed: React.FC = () => {
  //initialize states
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [initialized, setInitialized] = React.useState(false);
  //a page is 10 posts, the system queries this many posts at a time
  const PAGE_SIZE = 10;

  //fetches new posts from the backend
  const fetchPosts = async (page: number) => {
    //currently, we are mocking this with incrementally numbered posts
    const newPosts = Array.from({ length: PAGE_SIZE }, (_, i) => ({
      id: `${(page - 1) * PAGE_SIZE + i + 1}`,
      content: `Post ${(page - 1) * PAGE_SIZE + i + 1}`
    }));

    //return the mocked post data
    return new Promise<Post[]>((resolve) => {
      setTimeout(() => resolve(newPosts), 1000);
    });
  };

  //handles the loading and parsing of new data
  const loadMore = async () => {
    //only query more posts once initialized
    if(!initialized) return;

    //query new posts
    const newPosts = await fetchPosts(page);
    console.log({posts, newPosts})

    //update post list to append new posts and increase page number
    setPosts((prev) => [...prev, ...newPosts]);
    setPage((prev) => prev + 1);

    //limit to 5 pages for debugging
    if (page === 5) {
      setHasMore(false);
    }
  };

  const loadInitialPosts = async() => {
    //get the initial posts
    const initialPosts = await fetchPosts(page);
    setPosts(initialPosts);
    setPage(2);
    setInitialized(true);
  }

  //loads the initial posts
  React.useEffect(() => {
    loadInitialPosts();
  }, []);

  //the content
  return (
    <div>
    <p>Posts loaded: {posts.length} (should initially be {PAGE_SIZE})</p>
    <InfiniteScroll
      dataLength={posts.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<p className="text-center py-4">Loading more posts...</p>}
      endMessage={
        <p className="text-center py-4 text-gray-500">You've reached the end!</p>
      }
    >
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </InfiniteScroll>
    </div>
  );
};
