import React, { useState , useEffect } from "react"

import Posts from './modules/Posts.js'
import SideMenu from './modules/SideMenu.js'
import Header from './modules/Header.js'

import getMenu , { getCategories , getComments } from './modules/Worker.js'

function Main({}) {

  const [clickCount, setClickCount] = useState(0)
  const [page, setPage] = useState('main')

  const siteUrl = 'http://localhost/myBlogWp/' //Меняем на свой URL либо если на хостинге ставим тупо "/"

  useEffect(() => {},[page])
  return (
    <>
      <Header
              siteUrl = {siteUrl}
              page = {page}
              setPage = {setPage}
              getMenu = {getMenu}
              extraClass = {`header${page}`}
      />
    {
      //Главная страница
      (page == 'main') ?
                          <div key = {`bodyKey_${page}`} className="mainContainer">
                            <div className="headerBlock" onClick={() => getMenu()}>
                              <h1>Добро пожаловать в мое портфолио</h1>
                              <p>Welcome to easy dev.</p>
                            </div>

                            <div className="bodyContainer">

                            </div>
                          </div>
                       : false

    }
    {
      //Главная страница
      (page == 'blog') ?
                          <div key = {`bodyKey_${page}`} className="mainContainer">
                            <div className="headerBlock" onClick={() => getMenu()}>
                              <h1>Добро пожаловать в мой уютный блог.</h1>

                              <p>Welcome to easy dev.</p>
                            </div>

                            <div className="bodyContainer">
                              <Posts getComments={getComments} page = {page} setPage = {setPage} siteUrl = {siteUrl}/>
                            </div>
                          </div>
                       : false
    }
    <SideMenu page = {page} setPage = {setPage} getMenu = {getMenu} getCategories = {getCategories} siteUrl = {siteUrl} />
    </>
  )
}

export default Main;
