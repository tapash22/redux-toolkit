import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fatchPosts } from './postSlice';

function PostView(props) {

    const {isLoading, posts,error} = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fatchPosts());
    })

    return (
        <div>
            <div>
                {isLoading && <h3>loading</h3>}
            </div>
            <div>
                {error && <h3>{error}</h3>}
            </div>
            <div>
                {
                    posts && posts.map((post)=>{
                        return (
                            <div key={post.id}>
                                <h6>{post.id}</h6>
                                <h4>{post.title}</h4>
                                <div>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PostView;