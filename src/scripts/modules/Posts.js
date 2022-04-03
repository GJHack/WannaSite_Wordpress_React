import React , { useEffect , useState } from 'react';

const Posts = ({page, setPage}) => {

  const [postsArray, setPostsArray] = useState(['false']);

  const getPosts = () => {

    let temp_posts = [];

    fetch('/myBlogWp/wp-json/wp/v2/posts')

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

  return(
    <>
      <section className = "postsContainer">
        {
          postsArray.map((item, index) => {
            return <Post
                         key = {`keyPost_${index}`}
                         title = {item?.title?.rendered}
                         description = {item?.excerpt?.rendered}
                         content = {item?.content?.rendered}
                   />
          })
        }
      </section>
    </>
  )

}

const Post = ({ key , description , title , content }) => {

  return(
    <article className = "postBlock">
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{__html: description}}></div>

    </article>
  )
}

export default Posts;
