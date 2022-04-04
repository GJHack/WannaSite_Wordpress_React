import React, { useEffect , useState } from 'react'


function SideMenu({ siteUrl , page , setPage , getMenu , getCategories}) {

  const [sideMenu, setSideMenu] = useState([{'title': 'menu'}]);
  const [sideCategories, setSideCategories] = useState([{'name': 'menu'}]);

  if(sideMenu[0].title == 'menu') getMenu(siteUrl,setSideMenu);
  if(sideCategories[0].name == 'menu') getCategories(siteUrl,setSideCategories);

  useEffect(() => {},[sideCategories])

  return(
    <nav className = {`sideMenu ${(page == 'blog') ? 'activeSide' : 'noActiveSide'}`}>
      <div className = {`sideMenuCategories`}>
        {
          (sideCategories[0].name != 'menu') ?
            sideCategories.map((item, index) => {
              return <a key = {`sideCatKey_${item.name}`} href = {'#'}>{item.name}</a>
            })
                                             :
             <h3>Загрузка...</h3>
        }
      </div>
      <ul>
      {
        (sideMenu[0].title != 'menu') ?
          sideMenu.map((item, index) => {
            return <li key={`sideMenuKey__${index}`}><a href = {item.url}>{item.title}</a></li>
          })
                                      :
           <h3>Загрузка...</h3>
      }
      </ul>
    </nav>
  )
}

export default SideMenu;
