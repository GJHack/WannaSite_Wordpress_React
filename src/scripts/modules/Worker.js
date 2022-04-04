function getMenu(siteUrl,funcState,catId = '') {

  if(typeof funcState === 'function') {

    let temp_array = [];

    fetch(`${siteUrl}/wp-json/wp/v2/menu`)

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
export function getCategories(siteUrl,funcState) {
  if(typeof funcState === 'function') {

    let temp_array = [];

    fetch(`${siteUrl}/wp-json/wp/v2/categories`)

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
export function getComments(siteUrl,funcState,idPost = 0) {
  if(typeof funcState === 'function') {

    let temp_array = [];

    fetch(`${siteUrl}/wp-json/wp/v2/comments?post=${idPost}`)

      .then(response => response.json())
      .then((data) => {

        for(let item of data) {
          temp_array.push(item);
          console.log(item)
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
