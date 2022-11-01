import {useState} from 'react'
import BlogList from './BlogList';

const Home = () => {
    
    const[blogs, setBlogs] = useState([
        {title:'Best Hacking Websites', body:'60 Sticks per box', author:'Michael', id: 1},
        {title:'Is it too Late to Start', body:'Tap to Save', author:'Louisa', id: 2},
        {title:'Top 10 AI firms', body:'Like am gonna loose you', author:'Louisa', id: 3}
    ]);
    return (
        <div className ="home">
            <BlogList blogs = {blogs} title = "All Blogs!"/>
            <BlogList blogs = {blogs.filter((blogs) => blogs.author === 'Louisa')} title = "Louisa Blogs!"/>
        </div>
    );
}

export default Home;