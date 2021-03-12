import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, loading, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="home">
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
