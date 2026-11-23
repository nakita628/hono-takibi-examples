import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFoodConverse(
  args: InferRequestType<typeof client.food.converse.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.converse.$get(args, options))
}

export async function getFoodConverseSuggest(
  args: InferRequestType<typeof client.food.converse.suggest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.converse.suggest.$get(args, options))
}

export async function getFoodCustomFoodsSearch(
  args: InferRequestType<typeof client.food.customFoods.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.customFoods.search.$get(args, options))
}

export async function postFoodDetect(
  args: InferRequestType<typeof client.food.detect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.detect.$post(args, options))
}

export async function getFoodImagesAnalyze(
  args: InferRequestType<typeof client.food.images.analyze.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.images.analyze.$get(args, options))
}

export async function getFoodImagesClassify(
  args: InferRequestType<typeof client.food.images.classify.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.images.classify.$get(args, options))
}

export async function getFoodIngredientsAutocomplete(
  args: InferRequestType<typeof client.food.ingredients.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.ingredients.autocomplete.$get(args, options))
}

export async function postFoodIngredientsGlycemicLoad(
  args: InferRequestType<typeof client.food.ingredients.glycemicLoad.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.ingredients.glycemicLoad.$post(args, options))
}

export async function postFoodIngredientsMap(
  args: InferRequestType<typeof client.food.ingredients.map.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.ingredients.map.$post(args, options))
}

export async function getFoodIngredientsSearch(
  args: InferRequestType<typeof client.food.ingredients.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.ingredients.search.$get(args, options))
}

export async function getFoodIngredientsSubstitutes(
  args: InferRequestType<typeof client.food.ingredients.substitutes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.ingredients.substitutes.$get(args, options))
}

export async function getFoodIngredientsIdAmount(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.ingredients[':id'].amount.$get(args, options))
}

export async function getFoodIngredientsIdInformation(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.ingredients[':id'].information.$get(args, options))
}

export async function getFoodIngredientsIdSubstitutes(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.ingredients[':id'].substitutes.$get(args, options))
}

export async function getFoodJokesRandom(options?: ClientRequestOptions) {
  return await parseResponse(client.food.jokes.random.$get(undefined, options))
}

export async function getFoodMenuItemsSearch(
  args: InferRequestType<typeof client.food.menuItems.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.menuItems.search.$get(args, options))
}

export async function getFoodMenuItemsSuggest(
  args: InferRequestType<typeof client.food.menuItems.suggest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.menuItems.suggest.$get(args, options))
}

export async function getFoodMenuItemsId(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.menuItems[':id'].$get(args, options))
}

export async function getFoodMenuItemsIdNutritionLabel(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.menuItems[':id'].nutritionLabel.$get(args, options))
}

export async function getFoodMenuItemsIdNutritionLabelPng(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.menuItems[':id']['nutritionLabel.png'].$get(args, options))
}

export async function getFoodMenuItemsIdNutritionWidget(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.menuItems[':id'].nutritionWidget.$get(args, options))
}

export async function getFoodMenuItemsIdNutritionWidgetPng(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.food.menuItems[':id']['nutritionWidget.png'].$get(args, options),
  )
}

export async function postFoodProductsClassify(
  args: InferRequestType<typeof client.food.products.classify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products.classify.$post(args, options))
}

export async function postFoodProductsClassifyBatch(
  args: InferRequestType<typeof client.food.products.classifyBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products.classifyBatch.$post(args, options))
}

export async function getFoodProductsSearch(
  args: InferRequestType<typeof client.food.products.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products.search.$get(args, options))
}

export async function getFoodProductsSuggest(
  args: InferRequestType<typeof client.food.products.suggest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products.suggest.$get(args, options))
}

export async function getFoodProductsUpcUpc(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products.upc[':upc'].$get(args, options))
}

export async function getFoodProductsUpcUpcComparable(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products.upc[':upc'].comparable.$get(args, options))
}

export async function getFoodProductsId(
  args: InferRequestType<(typeof client.food.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products[':id'].$get(args, options))
}

export async function getFoodProductsIdNutritionLabel(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products[':id'].nutritionLabel.$get(args, options))
}

export async function getFoodProductsIdNutritionLabelPng(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products[':id']['nutritionLabel.png'].$get(args, options))
}

export async function getFoodProductsIdNutritionWidget(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products[':id'].nutritionWidget.$get(args, options))
}

export async function getFoodProductsIdNutritionWidgetPng(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.products[':id']['nutritionWidget.png'].$get(args, options))
}

export async function getFoodRestaurantsSearch(
  args: InferRequestType<typeof client.food.restaurants.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.restaurants.search.$get(args, options))
}

export async function getFoodSearch(
  args: InferRequestType<typeof client.food.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.search.$get(args, options))
}

export async function getFoodSiteSearch(
  args: InferRequestType<typeof client.food.site.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.site.search.$get(args, options))
}

export async function getFoodTriviaRandom(options?: ClientRequestOptions) {
  return await parseResponse(client.food.trivia.random.$get(undefined, options))
}

export async function getFoodVideosSearch(
  args: InferRequestType<typeof client.food.videos.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.videos.search.$get(args, options))
}

export async function getFoodWineDescription(
  args: InferRequestType<typeof client.food.wine.description.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.wine.description.$get(args, options))
}

export async function getFoodWineDishes(
  args: InferRequestType<typeof client.food.wine.dishes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.wine.dishes.$get(args, options))
}

export async function getFoodWinePairing(
  args: InferRequestType<typeof client.food.wine.pairing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.wine.pairing.$get(args, options))
}

export async function getFoodWineRecommendation(
  args: InferRequestType<typeof client.food.wine.recommendation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.wine.recommendation.$get(args, options))
}

export async function getMealplannerGenerate(
  args: InferRequestType<typeof client.mealplanner.generate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mealplanner.generate.$get(args, options))
}

export async function deleteMealplannerUsernameDayDate(
  args: InferRequestType<(typeof client.mealplanner)[':username']['day'][':date']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mealplanner[':username'].day[':date'].$delete(args, options))
}

export async function postMealplannerUsernameItems(
  args: InferRequestType<(typeof client.mealplanner)[':username']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mealplanner[':username'].items.$post(args, options))
}

export async function deleteMealplannerUsernameItemsId(
  args: InferRequestType<(typeof client.mealplanner)[':username']['items'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mealplanner[':username'].items[':id'].$delete(args, options))
}

export async function getMealplannerUsernameShoppingList(
  args: InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mealplanner[':username']['shopping-list'].$get(args, options))
}

export async function postMealplannerUsernameShoppingListItems(
  args: InferRequestType<
    (typeof client.mealplanner)[':username']['shopping-list']['items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mealplanner[':username']['shopping-list'].items.$post(args, options),
  )
}

export async function deleteMealplannerUsernameShoppingListItemsId(
  args: InferRequestType<
    (typeof client.mealplanner)[':username']['shopping-list']['items'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mealplanner[':username']['shopping-list'].items[':id'].$delete(args, options),
  )
}

export async function postMealplannerUsernameShoppingListStartDateEndDate(
  args: InferRequestType<
    (typeof client.mealplanner)[':username']['shopping-list'][':start-date'][':end-date']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mealplanner[':username']['shopping-list'][':start-date'][':end-date'].$post(
      args,
      options,
    ),
  )
}

export async function getMealplannerUsernameTemplates(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mealplanner[':username'].templates.$get(args, options))
}

export async function postMealplannerUsernameTemplates(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mealplanner[':username'].templates.$post(args, options))
}

export async function getMealplannerUsernameTemplatesId(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mealplanner[':username'].templates[':id'].$get(args, options))
}

export async function deleteMealplannerUsernameTemplatesId(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mealplanner[':username'].templates[':id'].$delete(args, options),
  )
}

export async function getMealplannerUsernameWeekStartDate(
  args: InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mealplanner[':username'].week[':start-date'].$get(args, options),
  )
}

export async function postRecipesAnalyze(
  args: InferRequestType<typeof client.recipes.analyze.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.analyze.$post(args, options))
}

export async function postRecipesAnalyzeInstructions(
  args: InferRequestType<typeof client.recipes.analyzeInstructions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.analyzeInstructions.$post(args, options))
}

export async function getRecipesAutocomplete(
  args: InferRequestType<typeof client.recipes.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.autocomplete.$get(args, options))
}

export async function getRecipesComplexSearch(
  args: InferRequestType<typeof client.recipes.complexSearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.complexSearch.$get(args, options))
}

export async function getRecipesConvert(
  args: InferRequestType<typeof client.recipes.convert.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.convert.$get(args, options))
}

export async function postRecipesCuisine(
  args: InferRequestType<typeof client.recipes.cuisine.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.cuisine.$post(args, options))
}

export async function getRecipesExtract(
  args: InferRequestType<typeof client.recipes.extract.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.extract.$get(args, options))
}

export async function getRecipesFindByIngredients(
  args: InferRequestType<typeof client.recipes.findByIngredients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.findByIngredients.$get(args, options))
}

export async function getRecipesFindByNutrients(
  args: InferRequestType<typeof client.recipes.findByNutrients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.findByNutrients.$get(args, options))
}

export async function getRecipesGuessNutrition(
  args: InferRequestType<typeof client.recipes.guessNutrition.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.guessNutrition.$get(args, options))
}

export async function getRecipesInformationBulk(
  args: InferRequestType<typeof client.recipes.informationBulk.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.informationBulk.$get(args, options))
}

export async function postRecipesParseIngredients(
  args: InferRequestType<typeof client.recipes.parseIngredients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.parseIngredients.$post(args, options))
}

export async function getRecipesQueriesAnalyze(
  args: InferRequestType<typeof client.recipes.queries.analyze.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.queries.analyze.$get(args, options))
}

export async function getRecipesQuickAnswer(
  args: InferRequestType<typeof client.recipes.quickAnswer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.quickAnswer.$get(args, options))
}

export async function getRecipesRandom(
  args: InferRequestType<typeof client.recipes.random.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.random.$get(args, options))
}

export async function postRecipesVisualizeEquipment(
  args: InferRequestType<typeof client.recipes.visualizeEquipment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.visualizeEquipment.$post(args, options))
}

export async function postRecipesVisualizeIngredients(
  args: InferRequestType<typeof client.recipes.visualizeIngredients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.visualizeIngredients.$post(args, options))
}

export async function postRecipesVisualizeNutrition(
  args: InferRequestType<typeof client.recipes.visualizeNutrition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.visualizeNutrition.$post(args, options))
}

export async function postRecipesVisualizePriceEstimator(
  args: InferRequestType<typeof client.recipes.visualizePriceEstimator.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.visualizePriceEstimator.$post(args, options))
}

export async function postRecipesVisualizeRecipe(
  args: InferRequestType<typeof client.recipes.visualizeRecipe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.visualizeRecipe.$post(args, options))
}

export async function postRecipesVisualizeTaste(
  args: InferRequestType<typeof client.recipes.visualizeTaste.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.visualizeTaste.$post(args, options))
}

export async function getRecipesIdAnalyzedInstructions(
  args: InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].analyzedInstructions.$get(args, options))
}

export async function getRecipesIdCard(
  args: InferRequestType<(typeof client.recipes)[':id']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].card.$get(args, options))
}

export async function getRecipesIdEquipmentWidget(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].equipmentWidget.$get(args, options))
}

export async function getRecipesIdEquipmentWidgetJson(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['equipmentWidget.json'].$get(args, options))
}

export async function getRecipesIdEquipmentWidgetPng(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['equipmentWidget.png'].$get(args, options))
}

export async function getRecipesIdInformation(
  args: InferRequestType<(typeof client.recipes)[':id']['information']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].information.$get(args, options))
}

export async function getRecipesIdIngredientWidget(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].ingredientWidget.$get(args, options))
}

export async function getRecipesIdIngredientWidgetJson(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['ingredientWidget.json'].$get(args, options))
}

export async function getRecipesIdIngredientWidgetPng(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['ingredientWidget.png'].$get(args, options))
}

export async function getRecipesIdNutritionLabel(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].nutritionLabel.$get(args, options))
}

export async function getRecipesIdNutritionLabelPng(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['nutritionLabel.png'].$get(args, options))
}

export async function getRecipesIdNutritionWidget(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].nutritionWidget.$get(args, options))
}

export async function getRecipesIdNutritionWidgetJson(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['nutritionWidget.json'].$get(args, options))
}

export async function getRecipesIdNutritionWidgetPng(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['nutritionWidget.png'].$get(args, options))
}

export async function getRecipesIdPriceBreakdownWidget(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].priceBreakdownWidget.$get(args, options))
}

export async function getRecipesIdPriceBreakdownWidgetJson(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['priceBreakdownWidget.json'].$get(args, options))
}

export async function getRecipesIdPriceBreakdownWidgetPng(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['priceBreakdownWidget.png'].$get(args, options))
}

export async function getRecipesIdSimilar(
  args: InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].similar.$get(args, options))
}

export async function getRecipesIdSummary(
  args: InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].summary.$get(args, options))
}

export async function getRecipesIdTasteWidget(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].tasteWidget.$get(args, options))
}

export async function getRecipesIdTasteWidgetJson(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['tasteWidget.json'].$get(args, options))
}

export async function getRecipesIdTasteWidgetPng(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id']['tasteWidget.png'].$get(args, options))
}

export async function postUsersConnect(
  args: InferRequestType<typeof client.users.connect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.connect.$post(args, options))
}
