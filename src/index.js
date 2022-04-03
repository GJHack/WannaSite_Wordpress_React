import './styles/main.css' //Можно использовать SCSS. Стоит обработчик. Мне удобнее просто CSS

import Main from './scripts/Main.js'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<Main />, document.querySelector("#App"))
