
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
 
const getInfo = () => {
        axios.get('https://api.thecatapi.com/v1/images/search?api_key=live_7oMxvoTmsZ75fhJaKcNG3tJClv8W3ExO0CY7dJileylNTiLntCZDlOkalRd2Bw1h')
     .then(res => {
        console.log(res)
    });
    }

const sendInfo = () => {};

getBtn.addEventListener('click', getInfo);
postBtn.addEventListener('click', sendInfo);