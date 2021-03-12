import { useState } from "react";
import BlogList from "./BlogList";

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
      author: "ujang",
      id: 3,
    },
  ]);
  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "ujang")}
        title="Maman Blogs!"
      />
    </div>
  );
};

export default Home;
