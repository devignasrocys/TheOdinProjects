// Constantns
const fetchRecipes = (str) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8a39fd208cmsh8bc0ba19be273acp1ed6c7jsnf27ed95e250f',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    };
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${str}`, options)
	.then(response => response.json())
	.then(async response => {
        // populate list with recipes
        console.log(response)
        let promise = await response
        makeCard(promise.hits)

    })
	.catch(err => console.error(err));
}
const makeCard = (options) => {


    document.getElementById('list').innerHTML = '';
  options.forEach(recipe => {
    let html_string = `          
    <li>
        <article>
            <img src="${recipe.recipe.image}" alt="">
        <div class="container">
            <p>${recipe.recipe.label}</p>
        </div>
    </article>
  </li>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', html_string)
  })
}

const input_search = document.getElementById('search-input');

input_search.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        fetchRecipes(input_search.value)
    }
})