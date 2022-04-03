import React, { useEffect , useState } from 'react'

import getMenu from './Worker.js'

function SideMenu({}) {

  const [sideMenu, setSideMenu] = useState([{'title': 'menu'}]);

  if(sideMenu[0].title == 'menu') getMenu(setSideMenu);

  return(
    <nav className = "sideMenu">
      <ul>
      {
        sideMenu.map((item, index) => {
          return <li key={`sideMenuKey__${index}`}><a href = {item.url}>{item.title}</a></li>
        })
      }
      </ul>
    </nav>
  )
}

export default SideMenu;
