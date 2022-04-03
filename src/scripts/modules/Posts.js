import React , { useEffect , useState } from 'react';

const Posts = ({ siteUrl , page, setPage}) => {

  const [postsArray, setPostsArray] = useState(['false']);
  const [clickedPost, setClickedPost] = useState('');

  const getPosts = () => {

    let temp_posts = [];

    fetch(`${siteUrl}/wp-json/wp/v2/posts`)

      .then(response => response.json())
      .then(data => {

        for(let post of data) {
          temp_posts.push(post);
        }

        console.log(`Количество записей: ${temp_posts.length}`);

        setPostsArray(temp_posts);

        temp_posts = [];

        setTimeout(() => {
          getPosts();
        }, 5000)

      })
      .catch(err => {
        console.log('Ошибка в получение постов.');
      })
  }

  if(postsArray[0] == 'false') getPosts();

  useEffect(()=>{},[postsArray])
  useEffect(() => {console.log(clickedPost)},[clickedPost])

  return(
    <>
      <section className = "postsContainer">
        {
          postsArray.map((item, index) => {
            return <Post
                         checkID = {`keyPost_${item.id}`}
                         title = {item?.title?.rendered}
                         description = {item?.excerpt?.rendered}
                         content = {item?.content?.rendered}
                         clickedPost = {clickedPost}
                         setClickedPost = {setClickedPost}
                   />
          })
        }
      </section>
    </>
  )

}

const Post = ({ clickedPost, setClickedPost , checkID , description , title , content }) => {

  console.log(checkID)
  useEffect(() => {console.log(clickedPost)},[clickedPost])

  return(
    <article className = {`postBlock ${(clickedPost === checkID)?'clickedPost':''}`} onClick = {(evt) => setClickedPost(checkID)}>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{__html: (clickedPost !== checkID)?description:content}}></div>

    </article>
  )
}

export default Posts;
