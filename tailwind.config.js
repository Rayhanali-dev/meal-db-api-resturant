/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
}

// for (const meal of meals) {
    //     console.log(meal);

    //     const div = document.createElement('div');
    //     div.classList.add('card');
    //     div.classList.add('lg:card-side');
    //     div.classList.add('bg-base-100')
    //     div.classList.add('shadow-xl')
    //     div.innerHTML = `
    //     <div class="grid grid-cols-2 items-center">
    //         <figure>
    //             <img class="w-full h-full" src="${meal.strMealThumb}" alt="Album" />
    //         </figure>
    //         <div class="card-body">
    //             <h2 class="text-2xl">${meal.strMeal}</h2>
    //             <p class="text-sm">There are many variations of passages of available, but the majority
    //             have suffered</p>
    //             <!-- The button to open modal -->
    //             <label for="my-modal-6" class="btn bg-transparent w-32 text-yellow-300 border-none">open modal</label>

    //             <!-- Put this part before </body> tag -->
    //             <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    //             <div class="modal modal-bottom sm:modal-middle">
    //                 <div class="modal-box">
    //                     <h3 class="font-bold text-lg">${meal.strMeal}</h3>
    //                     <p class="py-4 text-sm text-justify">${meal.strInstructions}</p>
    //                     <div class="modal-action">
    //                         <label for="my-modal-6" class="btn">Close</label>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `

    //     menuContainer.appendChild(div);

    // }
