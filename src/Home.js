import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new Website", body: "lorem ipsum...", author: "ujang", id: 1 },
    {
      title: "Welcome to My party",
      body: "lorem ipsum...",
      author: "maman",
      id: 2,
    },
    {
      title: "Front-End Developer",
      body: "lorem ipsum...",
      author: "tono",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
