var recipes = {prop: 1};
var newRecipes = Object.assign(recipes);

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(recipes, {prop2: 2});
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes[prop2] = '2';
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  delete newRecipes[prop];
  return Object.assign(newRecipes);
}

function destructivelyDeleteFromObjectByKey(object, key) {
 delete recipes.prop;
 return recipes;
}

