import React , { useEffect , useState } from 'react'

export default function Header({ siteUrl , getMenu , page , setPage , extraClass }) {

  const [headMenu, setHeadMenu] = useState([
                                             {
                                               'title': 'Главная',
                                               'desc': 'main',
                                               'action': () => setPage('main'),
                                               'alt': 'Переход на главную страницу',
                                               'id': 0,
                                             },
                                             {
                                               'title': 'Блог',
                                               'desc': 'blog',
                                               'action': () => { setPage('blog') },
                                               'alt': 'Переход в блог',
                                               'id': 1,
                                             }
                                           ])

  if(headMenu[0].title == 'menu') getMenu(siteUrl,setHeadMenu);

  useEffect(() => {},[headMenu]);
  useEffect(() => {},[page]);

  return(
    <div className = {`headerMenu ${extraClass}`}>
    {
      (headMenu[0]?.title != 'menu') ?
                 headMenu.map((item,index) => {
                   return <a
                            href = {'#'}
                            className = {`${ (item.desc == page) ? 'activeHeaderMenuItem' : 'headerMenuItem ' }`}
                            alt = {item.alt}
                            key = {item.id + "_KEY"}
                            onClick = {() => {item.action()}}
                            > {item.title} </a>
                 })
                 : <h5>Загрузка...</h5>
    }
    </div>
  )
}
