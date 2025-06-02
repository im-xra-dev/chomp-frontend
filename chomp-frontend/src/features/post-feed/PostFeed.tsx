import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PostItem } from './PostItem';

type Post = {
  id: number;
  content: string;
};

export const PostFeed: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [page, setPage] = React.useState(1);

  const fetchPosts = async (page: number) => {
    const newPosts = Array.from({ length: 10 }, (_, i) => ({
      id: (page - 1) * 10 + i + 1,
      content: `Post ${(page - 1) * 10 + i + 1}`
    }));

    return new Promise<Post[]>((resolve) => {
      setTimeout(() => resolve(newPosts), 1000);
    });
  };

  const loadMore = async () => {
    const newPosts = await fetchPosts(page);
    setPosts((prev) => [...prev, ...newPosts]);
    setPage((prev) => prev + 1);

    if (page === 5) {
      setHasMore(false);
    }
  };

  React.useEffect(() => {
    loadMore();
  }, []);

  return (
    <div>
    <p>Posts loaded: {posts.length} (should initially be 10)</p>
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
