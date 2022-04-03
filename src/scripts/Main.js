import React, { useState , useEffect } from "react"

import Posts from './modules/Posts.js'
import SideMenu from './modules/SideMenu.js'

import getMenu from './modules/Worker.js'

function Main({}) {

  const [clickCount, setClickCount] = useState(0)
  const [page, setPage] = useState('main')
  const [headMenu, setHeadMenu] = useState([{'title': 'menu'}])

  const siteUrl = 'http://localhost/myBlogWp/' //Меняем на свой URL либо если на хостинге ставим тупо "/"


  if(headMenu[0].title == 'menu') getMenu(siteUrl,setHeadMenu);

  useEffect(() => {},[headMenu]);

  return (
    <>
    <div className = "headerMenu">
    {
      (headMenu[0]?.title != 'menu') ?
                 headMenu.map((item,index) => {
                   return <a href = {item.url} className = "headerMenuItem" key = {item.id + "_KEY"}>{item.title}</a>
                 })
                 : <h5>Загрузка...</h5>
    }
    </div>
    {
      //Главная страница
      (page == 'main') ?
        <div className="mainContainer">
          <div className="headerBlock" onClick={() => getMenu()}>
            <h1>Добро пожаловать в мой уютный блог.</h1>

            <p>Welcome to easy dev.</p>
          </div>

          <div className="bodyContainer">
            <Posts siteUrl = {siteUrl}/>

          </div>
        </div>
                       : false
    }
    <SideMenu siteUrl = {siteUrl} />
    </>
  )
}

export default Main;
