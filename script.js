const API_KEY = '0180232c0ed4b0ab8f6bb5b483f5a57f'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const button = document.querySelector('button')
const movieInput = document.querySelector('input')
const imageDiv = document.querySelector('div')
const searchResult = document.querySelector('.movie-list')
//const renderList = await axios.get(`https://api.themoviedb.org/4/list/1`)


button.addEventListener('click', async () => {
    let movie = movieInput.value 
    let response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`)
    let search = response.data.results
    console.log(movie)
    console.log(search)   
})

const movieList = (searchResult) => {
    movieList.forEach((search) => {
        const list = list[i].title
        const thisPoster = list[i].poster_path
        const movieItem = document.createElement('li')
        movieItem.innerHTML = `<img src='${IMAGE_BASE_PATH}/${thisPoster}'/><div class='movie-list'>${list}</div>`
        list.appendChild(movieItem)
    })}
