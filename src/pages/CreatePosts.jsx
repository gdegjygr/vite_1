import { useState } from 'react';
import axios from 'axios';
import CreatePostsModule from "./CreatePostsModule.module.css"
const url = 'https://dummyjson.com/posts/add'

const CreatePosts = () => {
  const [postData, setPostData] = useState({title: '', body: '', userId: 1});

  const handleInputChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(url, postData);
      console.log('POST request: ', postData);
      setPostData(response.data.posts.add)
      console.log('Post added successfully:', response.data);
    } catch (error) {
      console.warn('Error adding post:', error);
    }
  } 

  return (
    <>
      <div className={CreatePostsModule.AddpostBlock}>
      <h2>Create Post</h2>
        <form onSubmit={handleFormSubmit}>
          <label className={CreatePostsModule.Label}>
            Title:
            <input type="text" name="title" value={postData.title} onChange={handleInputChange} 
            className={CreatePostsModule.Input}
            />
          </label>
          <br />
          <label>
            Body:
            <textarea name="body" value={postData.body} onChange={handleInputChange} 
            className={CreatePostsModule.Input}
            />
          </label>
          <br />
          <button type="submit" className={CreatePostsModule.Button}>Add news</button>
        </form>
      </div>
    </>
  );
};

export default CreatePosts;
