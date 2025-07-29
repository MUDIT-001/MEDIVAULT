import React, { useState } from "react";
import { FaFireAlt, FaUsers, FaComments, FaHashtag, FaTrash } from "react-icons/fa";

const Community = () => {
  const currentUser = "You";

  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Sarch M.",
      community: "Diabetes Support",
      time: "2 hours ago",
      content: "Tips for managing morning blood sugar spikes",
      details: "I've been struggling with morning highs and wanted to share what’s been working for me …",
      likes: 12,
      comments: [],
      trending: true,
      liked: false,
      newComment: "",
    },
    {
      id: 2,
      name: "Mike R.",
      community: "Heart Health Warriors",
      time: "4 hours ago",
      content: "6 months post - surgery update",
      details: "Wanted to share my progress after my cardiac procedure. The recovery has been amazing–",
      likes: 28,
      comments: [],
      liked: false,
      newComment: "",
    },
    {
      id: 3,
      name: "Emma L.",
      community: "Mental Health Matters",
      time: "6 hours ago",
      content: "Meditation apps that actually work",
      details: "Here are the ones that have made a real difference.",
      likes: 45,
      comments: [],
      trending: true,
      liked: false,
      newComment: "",
    },
    {
      id: 4,
      name: "D.K.",
      community: "Fitness & Nutrition",
      time: "8 hours ago",
      content: "Healthy meal prep for busy professionals",
      details: "Working 60+ hours a week but still want to eat healthy? Here’s my weekly prep routine",
      likes: 0,
      comments: [],
      trending: true,
      liked: false,
      newComment: "",
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handleNewPost = () => {
    if (newPost.trim()) {
      const newEntry = {
        id: Date.now(),
        name: currentUser,
        community: "Your Community",
        time: "Just now",
        content: newPost,
        details: "",
        likes: 0,
        comments: [],
        trending: false,
        liked: false,
        newComment: "",
      };
      setPosts([newEntry, ...posts]);
      setNewPost("");
    }
  };

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id && !post.liked
          ? { ...post, likes: post.likes + 1, liked: true }
          : post
      )
    );
  };

  const handleUnlike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id && post.liked
          ? { ...post, likes: post.likes - 1, liked: false }
          : post
      )
    );
  };

  const handleCommentChange = (id, value) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, newComment: value } : post
      )
    );
  };

  const handleAddComment = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === id && post.newComment.trim()) {
          return {
            ...post,
            comments: [...post.comments, { text: post.newComment, author: currentUser }],
            newComment: "",
          };
        }
        return post;
      })
    );
  };

  const handleDeletePost = (id) => {
    setPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== id || post.name !== currentUser)
    );
  };

  const handleDeleteComment = (postId, index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const newComments = [...post.comments];
          if (newComments[index].author === currentUser) {
            newComments.splice(index, 1);
          }
          return { ...post, comments: newComments };
        }
        return post;
      })
    );
  };

  const popularCommunities = [
    { name: "Diabetes Support", members: 1247, posts: 89 },
    { name: "Heart Health Warriors", members: 692, posts: 156 },
    { name: "Mental Health Matters", members: 2156, posts: 234 },
    { name: "Fitness & Nutrition", members: 3421, posts: 967 },
  ];

  const trendingTopics = [
    "#BloodSugarTips",
    "#HeartHealthyRecipes",
    "#MentalWellness",
    "#ExerciseMotivation",
    "#DiabetesSupport",
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Community</h1>
      <p className="text-gray-600 mb-6">
        Connect with others on similar health journeys and share experiences
      </p>

      {/* New Post Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full p-3 rounded-xl border border-gray-300"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
          onClick={handleNewPost}
        >
          Post
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Posts */}
        <div className="lg:col-span-2 space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-5 rounded-xl shadow relative">
              <div className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">{post.name}</span> • {post.community} • {post.time}
              </div>
              <div className="font-semibold text-lg">{post.content}</div>
              <p className="text-gray-700 text-sm mt-1">{post.details}</p>

              {/* Like/Comment/Delete */}
              <div className="flex items-center gap-6 mt-4 text-gray-600 text-sm">
                {post.liked ? (
                  <button onClick={() => handleUnlike(post.id)} className="text-red-500">👎 Unlike</button>
                ) : (
                  <button onClick={() => handleLike(post.id)} className="hover:text-blue-600">👍 {post.likes} Like</button>
                )}
                {post.name === currentUser && (
                  <button onClick={() => handleDeletePost(post.id)} className="text-gray-400 hover:text-red-600">
                    <FaTrash />
                  </button>
                )}
              </div>

              {/* Comment Input */}
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={post.newComment}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  className="flex-1 border rounded-lg px-3 py-2 text-sm"
                />
                <button
                  onClick={() => handleAddComment(post.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600"
                >
                  Comment
                </button>
              </div>

              {/* Comments List */}
              <div className="mt-3 space-y-2">
                {post.comments.map((comment, idx) => (
                  <div key={idx} className="flex justify-between items-center text-gray-700 text-sm bg-gray-100 rounded px-3 py-2">
                    <span>{comment.text}</span>
                    {comment.author === currentUser && (
                      <button onClick={() => handleDeleteComment(post.id, idx)} className="text-gray-400 hover:text-red-600">
                        <FaTrash />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {post.trending && (
                <span className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                  🔥 Trending
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-3">Popular Communities</h3>
            {popularCommunities.map((com, i) => (
              <div key={i} className="flex justify-between items-center mb-2">
                <div>
                  <div className="font-medium">{com.name}</div>
                  <div className="text-xs text-gray-500">{com.members} members • {com.posts} posts</div>
                </div>
                <button className="text-blue-600 text-sm hover:underline">Join</button>
              </div>
            ))}
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-3">Trending Topics</h3>
            <ul className="space-y-2">
              {trendingTopics.map((topic, i) => (
                <li key={i} className="text-blue-600 hover:underline text-sm">{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
