// import test from "./test";
// Global app controller
// import num from "./test";
// const x = 23;
// console.log(
//   `I imported ${num} from another module! Woah thats the number ${x}!`
// );

// import str from "./models/Search";
// import { add as a, multiply as m, ID } from "./views/Searchview";
// import * as searchview from "./views/Searchview";
// console.log(
//   `Using imported functions! ${searchview.add(
//     searchview.ID,
//     2
//   )} and ${searchview.multiply(3, 5)}. ${str} `
// );

const state = {};
import Search from "./models/Search";
import Recipe from "./models/Recipe";
import List from "./models/List";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import { elements, renderLoader, clearLoader } from "./views/base";
//Global state of the app
//*- Search object
//*- Current recipe object
//*- Shopping list object
//*- Liked recipes

//SEARCH CONTROLLER
const controlSearch = async () => {
  //1. Get query from view
  const query = searchView.getInput();

  if (query) {
    //2. New search object add to state
    state.search = new Search(query);
    //3. Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    try {
      //4. Search for recipes
      await state.search.getResults();

      //5. Render results on UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (err) {
      alert("Something wrong with the search");
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); //makes the page not reload when clicking Search
  controlSearch();
});

//TESTING

// window.addEventListener("load", (e) => {
//   e.preventDefault(); //makes the page not reload when clicking Search
//   controlSearch();
// });

elements.searchResPages.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    //console.log(goToPage);
    searchView.renderResults(state.search.result, goToPage);
  }
});

// const search = new Search("pizza");
// console.log(search);
// search.getResults();

//RECIPE CONTROLLER
// const r = new Recipe(46956);
// r.getRecipe();
// console.log(r);

const controlRecipe = async () => {
  //GET ID FROM URL
  const id = window.location.hash.replace("#", " ");
  console.log(id);

  if (id) {
    //PREPARE UI FOR CHANGES
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    //HIGHLIGHT THE SELECTED SEARCH ITEM
    if (state.search) {
      searchView.highlightedSelected(id);
    }

    //CREATE A NEW RECIPE OBJECT
    state.recipe = new Recipe(id);

    //TESTING
    //window.r = state.recipe;

    try {
      //GET RECIPE DATA AND PARSE INGREDIENTS
      await state.recipe.getRecipe();
      //console.log(state.recipe.ingredients);
      state.recipe.parseIngredients();

      //CALCULATE TIME AND SERVINGS
      //console.log(state.recipe.ingredients);
      state.recipe.calcTime();
      state.recipe.calcServings();

      //RENDER THE RECIPE
      //console.log(state.recipe);
      clearLoader();
      recipeView.renderRecipe(state.recipe);
    } catch (error) {
      alert("Error processing recipe");
    }
  }
};

// window.addEventListener("hashchange", controlRecipe);
// window.addEventListener("load", controlRecipe);

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);

//HANDLING RECIPE BUTTON CLICKS
elements.recipe.addEventListener("click", (e) => {
  if (e.target.matches(".btn-decrease, btn-decrease *")) {
    //decrease button is clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings("dec");
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches(".btn-increase, btn-increase *")) {
    //increase button is clicked
    state.recipe.updateServings("inc");
    recipeView.updateServingsIngredients(state.recipe);
  }
  //console.log(state.recipe);
});

window.l = new List();
