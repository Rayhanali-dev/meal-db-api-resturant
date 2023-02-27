let findText = 'chicken';
const meal = (searchText) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch (URL)
    .then (res => res.json())
    .then (data => displayMeal(data.meals.slice(0, 6)))
}

const displayMeal = (meals) => {
    // console.log(meals.strMeal);
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';
    meals.forEach (meal => {
        console.log(meal);

        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('lg:card-side');
        div.classList.add('bg-base-100')
        div.classList.add('shadow-xl')
        div.innerHTML = `
        <div class="grid grid-cols-2 items-center">
            <figure>
                <img class="w-full h-full" src="${meal.strMealThumb}" alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="text-2xl">${meal.strMeal}</h2>
                <p class="text-sm">There are many variations of passages of available, but the majority
                have suffered</p>
                <label for="my-modal-6" onclick="modal(${meal.idMeal})" class="btn">open modal</label>
            </div>
        </div>
        `
        menuContainer.appendChild(div);
    })
}

const showAllDataTogether = () => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${findText}`;
    fetch (URL)
    .then (res => res.json())
    .then (data => displaymeal(data.meals))
};


const displaymeal = (showAll) => {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';
    showAll.forEach(meals => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('lg:card-side');
        div.classList.add('bg-base-100')
        div.classList.add('shadow-xl')
        div.innerHTML = `
        <div class="grid grid-cols-2 items-center">
            <figure>
                <img class="w-full h-full" src="${meals.strMealThumb}" alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="text-2xl">${meals.strMeal}</h2>
                <p class="text-sm">There are many variations of passages of available, but the majority
                have suffered</p>
                <label for="my-modal-6" onclick="modal(${meals.idMeal})" class="btn">open modal</label>
            </div>
        </div>`
        menuContainer.appendChild(div);
        
    })
}

const modal = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then (res => res.json())
    .then (data => dispalyModal(data))
}

const dispalyModal = (modal) => {
    const modalBox = document.getElementById('modal-boxs');
    modalBox.textContent = "";
    modalBox.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">${modal.meals[0].strMeal}</h2>
        <img src="${modal.meals[0].strMealThumb}">
        <div class="modal-action">
            <label for="my-modal-6" class="btn">Close</label>
        </div>`;
}

const searchText = () => {
    const searchField = document.getElementById('search-field').value;
    findText = searchField
    meal(searchField)
    searchField.value = ''
}


meal(findText)