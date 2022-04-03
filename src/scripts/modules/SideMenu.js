import React, { useEffect , useState } from 'react'

import getMenu from './Worker.js'

function SideMenu({siteUrl}) {

  const [sideMenu, setSideMenu] = useState([{'title': 'menu'}]);

  if(sideMenu[0].title == 'menu') getMenu(siteUrl,setSideMenu);

  return(
    <nav className = "sideMenu">
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
