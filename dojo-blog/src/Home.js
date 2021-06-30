import { useState, useEffect } from 'react';
import BlogList from './BlogList';

//Parent component
const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'Larry', id: 1},
    {title: 'Wisedom and Knowledge', body: 'lorem ipsum...', author: 'Shayla, Sawyer, & Stetson', id: 2},
    {title: 'My favorite animal', body: 'lorem ipsum...', author: 'Shayla', id: 3},
    {title: 'My Vacation in Florida', body: 'lorem ipsum...', author: 'Kelly', id: 4}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
    
  }

  //Using for authentication or to pass data.
  useEffect(() => {
    console.log('use effect ran');
  }, []);

  //Child component
  return (  
       <div className="home">
          <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
       </div> 
    );
}
 
export default Home;
