var recipes = {prop: 1};
var newRecipes = Object.assign(recipes);

function updateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign(recipes, {prop2: '2'});
  return resipes;
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

