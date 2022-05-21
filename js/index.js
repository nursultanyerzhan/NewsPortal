import { getArticles } from './modules/createElements.js';

const setResultInfo = () => {
    const searchResultInfo = document.querySelector('#searchResultInfo');
    
};

const getHeadlines = (count, country) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}`, {
        headers: {
            'X-Api-Key': '2a5b3ff3dfa44f57af65878b2d80ffb8'
        },
    })
    .then(data => data.json())
    .then(response => {
        console.log(response.articles);
        getArticles(response.articles.slice(0, count), true);
    });
};

const form = document.querySelector('.form-search');
form.addEventListener('submit', e => {
    e.preventDefault();
    const params = Object.fromEntries(new FormData(e.target));

    fetch(`https://newsapi.org/v2/everything?q=${params.search}`, {
        headers: {
            'X-Api-Key': '2a5b3ff3dfa44f57af65878b2d80ffb8'
        },
    })
    .then(data => data.json())
    .then(response => {
        getArticles(response.articles, false);
    });

    getHeadlines(4, params.country);
});


