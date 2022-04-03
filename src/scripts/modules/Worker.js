const getMenu = (funcState) => {
  if(typeof funcState === 'function') {
    
    let temp_array = [];

    fetch('/myBlogWp/wp-json/wp/v2/menu')

      .then(response => response.json())
      .then((data) => {

        for(let item of data) {
          temp_array.push(item);
        }
        funcState(temp_array);

        //Пересмотреть таймер обновления
        setTimeout(() => {
          getMenu();
        }, 5000)
      })
      .catch( e => console.log(e));
  }

}

export default getMenu;
