const baseURL = 'https://api.themoviedb.org/3';

async function getTrendingMoviesPreview() {
    const res = await fetch(baseURL + '/trending/movie/day?api_key='+API_KEY);
    const data = await res.json();

    const movies = data.results;
    console.log({ data, movies });
    
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.append(movieContainer);
    });
}

async function getCategoriesPreview() {
    const res = await fetch(baseURL + '/genre/movie/list?api_key='+API_KEY);
    const data = await res.json();

    const categories = data.genres;
    categories.forEach(category => {
        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const cartegoryTitle = document.createElement('h3');
        cartegoryTitle.classList.add('category-title');
        cartegoryTitle.setAttribute('id', 'id'+category.id);
        const categoryTitleText = document.createTextNode(category.name);

        cartegoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(cartegoryTitle);
        previewCategoriesContainer.appendChild(categoryContainer);
    });
}

getTrendingMoviesPreview();
getCategoriesPreview();