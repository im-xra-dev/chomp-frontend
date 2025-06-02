// PLACEHOLDER CONTENT

type Post = {
    id: string;
    content: string;
  };
  
  export const PostItem = ({ post }: { post: Post }) => {
    return (
      <div className="bg-white rounded-lg shadow p-5 mt-5 h-70">
        <p className="text-sm text-gray-800">#{post.id}</p>
        <p className="text-sm text-gray-800">{post.content}</p>
      </div>
    );
  };
  