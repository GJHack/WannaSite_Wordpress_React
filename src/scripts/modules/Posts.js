import React , { useEffect , useState } from 'react';

const Posts = ({ siteUrl , getComments , page, setPage}) => {

  const [postsArray, setPostsArray] = useState([false]);
  const [clickedPost, setClickedPost] = useState('');

  const getPosts = () => { //Хули это тут делает, перенести в Worker. Сейчас лень. Сасамба.

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

  if(postsArray[0] == false) getPosts();

  useEffect(()=>{},[postsArray])
  useEffect(() => {},[clickedPost])

  return(
    <>
      <section className = "postsContainer">
        {
          postsArray.map((item, index) => {
            return (postsArray[0]) ?
                                      <section className = {`postAndComments`}>
                                        <Post
                                               checkID = {`keyPost_${item.id}`}
                                               title = {item?.title?.rendered}
                                               description = {item?.excerpt?.rendered}
                                               content = {item?.content?.rendered}
                                               clickedPost = {clickedPost}
                                               setClickedPost = {setClickedPost}
                                         />
                                        <Comments siteUrl = {siteUrl} getComments = {getComments} parentID = {item.id}/>
                                      </section>
                                   : <h2>Загрузка...</h2>
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

const Comments = ({siteUrl , getComments , parentID}) => {
    const [comments, setComments] = useState([false]);
    if(comments[0] == false) getComments(siteUrl , setComments , parentID);

    const likeComment = (id,karma) => { //Хули это тут делает, перенести в Worker. Сейчас лень. Сасамба.
      //ЛАЙКИ не работают
        fetch(`${siteUrl}wp-json/wp/v2/comments?comment_ID=${id}?comment_karma=${1+karma}`,{'method': 'POST' , headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkwODEwMDgsImVtYWlsIjoiZ2pkZXY5M0BnbWFpbC5jb20iLCJpZCI6MiwidXNlcm5hbWUiOiJteXNwb3QifQ.J0L5_ukqQdT5FGG6xEv_-jOkf20CqyuR2SGV0buifj8'}})
          .then(response => console.log(response.status))
          .then(data => {})
          .catch(err => {
            console.log('Ошибка при лайке.');
          })
    }
    return(
      <>
      {
        comments.map((item, index) => {
          return (comments[0]) ?
                                   <div className={`comment`} onClick = {() => likeComment(item.id,item.karma)}>
                                    <h5>{item.author_name}</h5>
                                    <h5>{`Лайков: ${item.karma}`}</h5>
                                    <p dangerouslySetInnerHTML = {{'__html': item.content.rendered}}></p>
                                   </div>
                                 : <h2>Загрузка...</h2>
        })
      }
      </>
    )
}

export default Posts;
