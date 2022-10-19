
import { useEffect, useState } from 'react';
import  React from 'react';

import Comment from "./comment";


export default function Api(props){
   
  
    return(
        <div>
            
            <FetchComments></FetchComments>
            <h2>Home Page</h2>
            <p>This is home page</p>
            <p>User Data List goes here</p>
            
        </div>
    );
}


function FetchComments() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
      async function fetchCommentData() {
      const response = await fetch('https://gorest.co.in/public/v1/posts');
       const { data } = await response.json(response);
      setComments(data);
      }
      fetchCommentData();
    }, []);
    return (
      <div>
        
        {comments.map(d => <Comment id={d.id} post_id={d.post_id} name={d.name} email={d.email} body={d.body} />)}
      </div>
    );
  }
  