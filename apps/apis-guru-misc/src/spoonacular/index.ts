import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMealplannerUsernameDayDateRoute,
  deleteMealplannerUsernameItemsIdRoute,
  deleteMealplannerUsernameShoppingListItemsIdRoute,
  deleteMealplannerUsernameTemplatesIdRoute,
  getFoodConverseRoute,
  getFoodConverseSuggestRoute,
  getFoodCustomFoodsSearchRoute,
  getFoodImagesAnalyzeRoute,
  getFoodImagesClassifyRoute,
  getFoodIngredientsAutocompleteRoute,
  getFoodIngredientsIdAmountRoute,
  getFoodIngredientsIdInformationRoute,
  getFoodIngredientsIdSubstitutesRoute,
  getFoodIngredientsSearchRoute,
  getFoodIngredientsSubstitutesRoute,
  getFoodJokesRandomRoute,
  getFoodMenuItemsIdNutritionLabelPngRoute,
  getFoodMenuItemsIdNutritionLabelRoute,
  getFoodMenuItemsIdNutritionWidgetPngRoute,
  getFoodMenuItemsIdNutritionWidgetRoute,
  getFoodMenuItemsIdRoute,
  getFoodMenuItemsSearchRoute,
  getFoodMenuItemsSuggestRoute,
  getFoodProductsIdNutritionLabelPngRoute,
  getFoodProductsIdNutritionLabelRoute,
  getFoodProductsIdNutritionWidgetPngRoute,
  getFoodProductsIdNutritionWidgetRoute,
  getFoodProductsIdRoute,
  getFoodProductsSearchRoute,
  getFoodProductsSuggestRoute,
  getFoodProductsUpcUpcComparableRoute,
  getFoodProductsUpcUpcRoute,
  getFoodRestaurantsSearchRoute,
  getFoodSearchRoute,
  getFoodSiteSearchRoute,
  getFoodTriviaRandomRoute,
  getFoodVideosSearchRoute,
  getFoodWineDescriptionRoute,
  getFoodWineDishesRoute,
  getFoodWinePairingRoute,
  getFoodWineRecommendationRoute,
  getMealplannerGenerateRoute,
  getMealplannerUsernameShoppingListRoute,
  getMealplannerUsernameTemplatesIdRoute,
  getMealplannerUsernameTemplatesRoute,
  getMealplannerUsernameWeekStartDateRoute,
  getRecipesAutocompleteRoute,
  getRecipesComplexSearchRoute,
  getRecipesConvertRoute,
  getRecipesExtractRoute,
  getRecipesFindByIngredientsRoute,
  getRecipesFindByNutrientsRoute,
  getRecipesGuessNutritionRoute,
  getRecipesIdAnalyzedInstructionsRoute,
  getRecipesIdCardRoute,
  getRecipesIdEquipmentWidgetJsonRoute,
  getRecipesIdEquipmentWidgetPngRoute,
  getRecipesIdEquipmentWidgetRoute,
  getRecipesIdInformationRoute,
  getRecipesIdIngredientWidgetJsonRoute,
  getRecipesIdIngredientWidgetPngRoute,
  getRecipesIdIngredientWidgetRoute,
  getRecipesIdNutritionLabelPngRoute,
  getRecipesIdNutritionLabelRoute,
  getRecipesIdNutritionWidgetJsonRoute,
  getRecipesIdNutritionWidgetPngRoute,
  getRecipesIdNutritionWidgetRoute,
  getRecipesIdPriceBreakdownWidgetJsonRoute,
  getRecipesIdPriceBreakdownWidgetPngRoute,
  getRecipesIdPriceBreakdownWidgetRoute,
  getRecipesIdSimilarRoute,
  getRecipesIdSummaryRoute,
  getRecipesIdTasteWidgetJsonRoute,
  getRecipesIdTasteWidgetPngRoute,
  getRecipesIdTasteWidgetRoute,
  getRecipesInformationBulkRoute,
  getRecipesQueriesAnalyzeRoute,
  getRecipesQuickAnswerRoute,
  getRecipesRandomRoute,
  postFoodDetectRoute,
  postFoodIngredientsGlycemicLoadRoute,
  postFoodIngredientsMapRoute,
  postFoodProductsClassifyBatchRoute,
  postFoodProductsClassifyRoute,
  postMealplannerUsernameItemsRoute,
  postMealplannerUsernameShoppingListItemsRoute,
  postMealplannerUsernameShoppingListStartDateEndDateRoute,
  postMealplannerUsernameTemplatesRoute,
  postRecipesAnalyzeInstructionsRoute,
  postRecipesAnalyzeRoute,
  postRecipesCuisineRoute,
  postRecipesParseIngredientsRoute,
  postRecipesVisualizeEquipmentRoute,
  postRecipesVisualizeIngredientsRoute,
  postRecipesVisualizeNutritionRoute,
  postRecipesVisualizePriceEstimatorRoute,
  postRecipesVisualizeRecipeRoute,
  postRecipesVisualizeTasteRoute,
  postUsersConnectRoute,
} from './routes'
import {
  deleteMealplannerUsernameDayDateRouteHandler,
  deleteMealplannerUsernameItemsIdRouteHandler,
  deleteMealplannerUsernameShoppingListItemsIdRouteHandler,
  deleteMealplannerUsernameTemplatesIdRouteHandler,
  getFoodConverseRouteHandler,
  getFoodConverseSuggestRouteHandler,
  getFoodCustomFoodsSearchRouteHandler,
  getFoodImagesAnalyzeRouteHandler,
  getFoodImagesClassifyRouteHandler,
  getFoodIngredientsAutocompleteRouteHandler,
  getFoodIngredientsIdAmountRouteHandler,
  getFoodIngredientsIdInformationRouteHandler,
  getFoodIngredientsIdSubstitutesRouteHandler,
  getFoodIngredientsSearchRouteHandler,
  getFoodIngredientsSubstitutesRouteHandler,
  getFoodJokesRandomRouteHandler,
  getFoodMenuItemsIdNutritionLabelPngRouteHandler,
  getFoodMenuItemsIdNutritionLabelRouteHandler,
  getFoodMenuItemsIdNutritionWidgetPngRouteHandler,
  getFoodMenuItemsIdNutritionWidgetRouteHandler,
  getFoodMenuItemsIdRouteHandler,
  getFoodMenuItemsSearchRouteHandler,
  getFoodMenuItemsSuggestRouteHandler,
  getFoodProductsIdNutritionLabelPngRouteHandler,
  getFoodProductsIdNutritionLabelRouteHandler,
  getFoodProductsIdNutritionWidgetPngRouteHandler,
  getFoodProductsIdNutritionWidgetRouteHandler,
  getFoodProductsIdRouteHandler,
  getFoodProductsSearchRouteHandler,
  getFoodProductsSuggestRouteHandler,
  getFoodProductsUpcUpcComparableRouteHandler,
  getFoodProductsUpcUpcRouteHandler,
  getFoodRestaurantsSearchRouteHandler,
  getFoodSearchRouteHandler,
  getFoodSiteSearchRouteHandler,
  getFoodTriviaRandomRouteHandler,
  getFoodVideosSearchRouteHandler,
  getFoodWineDescriptionRouteHandler,
  getFoodWineDishesRouteHandler,
  getFoodWinePairingRouteHandler,
  getFoodWineRecommendationRouteHandler,
  getMealplannerGenerateRouteHandler,
  getMealplannerUsernameShoppingListRouteHandler,
  getMealplannerUsernameTemplatesIdRouteHandler,
  getMealplannerUsernameTemplatesRouteHandler,
  getMealplannerUsernameWeekStartDateRouteHandler,
  getRecipesAutocompleteRouteHandler,
  getRecipesComplexSearchRouteHandler,
  getRecipesConvertRouteHandler,
  getRecipesExtractRouteHandler,
  getRecipesFindByIngredientsRouteHandler,
  getRecipesFindByNutrientsRouteHandler,
  getRecipesGuessNutritionRouteHandler,
  getRecipesIdAnalyzedInstructionsRouteHandler,
  getRecipesIdCardRouteHandler,
  getRecipesIdEquipmentWidgetJsonRouteHandler,
  getRecipesIdEquipmentWidgetPngRouteHandler,
  getRecipesIdEquipmentWidgetRouteHandler,
  getRecipesIdInformationRouteHandler,
  getRecipesIdIngredientWidgetJsonRouteHandler,
  getRecipesIdIngredientWidgetPngRouteHandler,
  getRecipesIdIngredientWidgetRouteHandler,
  getRecipesIdNutritionLabelPngRouteHandler,
  getRecipesIdNutritionLabelRouteHandler,
  getRecipesIdNutritionWidgetJsonRouteHandler,
  getRecipesIdNutritionWidgetPngRouteHandler,
  getRecipesIdNutritionWidgetRouteHandler,
  getRecipesIdPriceBreakdownWidgetJsonRouteHandler,
  getRecipesIdPriceBreakdownWidgetPngRouteHandler,
  getRecipesIdPriceBreakdownWidgetRouteHandler,
  getRecipesIdSimilarRouteHandler,
  getRecipesIdSummaryRouteHandler,
  getRecipesIdTasteWidgetJsonRouteHandler,
  getRecipesIdTasteWidgetPngRouteHandler,
  getRecipesIdTasteWidgetRouteHandler,
  getRecipesInformationBulkRouteHandler,
  getRecipesQueriesAnalyzeRouteHandler,
  getRecipesQuickAnswerRouteHandler,
  getRecipesRandomRouteHandler,
  postFoodDetectRouteHandler,
  postFoodIngredientsGlycemicLoadRouteHandler,
  postFoodIngredientsMapRouteHandler,
  postFoodProductsClassifyBatchRouteHandler,
  postFoodProductsClassifyRouteHandler,
  postMealplannerUsernameItemsRouteHandler,
  postMealplannerUsernameShoppingListItemsRouteHandler,
  postMealplannerUsernameShoppingListStartDateEndDateRouteHandler,
  postMealplannerUsernameTemplatesRouteHandler,
  postRecipesAnalyzeInstructionsRouteHandler,
  postRecipesAnalyzeRouteHandler,
  postRecipesCuisineRouteHandler,
  postRecipesParseIngredientsRouteHandler,
  postRecipesVisualizeEquipmentRouteHandler,
  postRecipesVisualizeIngredientsRouteHandler,
  postRecipesVisualizeNutritionRouteHandler,
  postRecipesVisualizePriceEstimatorRouteHandler,
  postRecipesVisualizeRecipeRouteHandler,
  postRecipesVisualizeTasteRouteHandler,
  postUsersConnectRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFoodConverseRoute, getFoodConverseRouteHandler)
  .openapi(getFoodConverseSuggestRoute, getFoodConverseSuggestRouteHandler)
  .openapi(getFoodCustomFoodsSearchRoute, getFoodCustomFoodsSearchRouteHandler)
  .openapi(postFoodDetectRoute, postFoodDetectRouteHandler)
  .openapi(getFoodImagesAnalyzeRoute, getFoodImagesAnalyzeRouteHandler)
  .openapi(getFoodImagesClassifyRoute, getFoodImagesClassifyRouteHandler)
  .openapi(getFoodIngredientsAutocompleteRoute, getFoodIngredientsAutocompleteRouteHandler)
  .openapi(postFoodIngredientsGlycemicLoadRoute, postFoodIngredientsGlycemicLoadRouteHandler)
  .openapi(postFoodIngredientsMapRoute, postFoodIngredientsMapRouteHandler)
  .openapi(getFoodIngredientsSearchRoute, getFoodIngredientsSearchRouteHandler)
  .openapi(getFoodIngredientsSubstitutesRoute, getFoodIngredientsSubstitutesRouteHandler)
  .openapi(getFoodIngredientsIdAmountRoute, getFoodIngredientsIdAmountRouteHandler)
  .openapi(getFoodIngredientsIdInformationRoute, getFoodIngredientsIdInformationRouteHandler)
  .openapi(getFoodIngredientsIdSubstitutesRoute, getFoodIngredientsIdSubstitutesRouteHandler)
  .openapi(getFoodJokesRandomRoute, getFoodJokesRandomRouteHandler)
  .openapi(getFoodMenuItemsSearchRoute, getFoodMenuItemsSearchRouteHandler)
  .openapi(getFoodMenuItemsSuggestRoute, getFoodMenuItemsSuggestRouteHandler)
  .openapi(getFoodMenuItemsIdRoute, getFoodMenuItemsIdRouteHandler)
  .openapi(getFoodMenuItemsIdNutritionLabelRoute, getFoodMenuItemsIdNutritionLabelRouteHandler)
  .openapi(
    getFoodMenuItemsIdNutritionLabelPngRoute,
    getFoodMenuItemsIdNutritionLabelPngRouteHandler,
  )
  .openapi(getFoodMenuItemsIdNutritionWidgetRoute, getFoodMenuItemsIdNutritionWidgetRouteHandler)
  .openapi(
    getFoodMenuItemsIdNutritionWidgetPngRoute,
    getFoodMenuItemsIdNutritionWidgetPngRouteHandler,
  )
  .openapi(postFoodProductsClassifyRoute, postFoodProductsClassifyRouteHandler)
  .openapi(postFoodProductsClassifyBatchRoute, postFoodProductsClassifyBatchRouteHandler)
  .openapi(getFoodProductsSearchRoute, getFoodProductsSearchRouteHandler)
  .openapi(getFoodProductsSuggestRoute, getFoodProductsSuggestRouteHandler)
  .openapi(getFoodProductsUpcUpcRoute, getFoodProductsUpcUpcRouteHandler)
  .openapi(getFoodProductsUpcUpcComparableRoute, getFoodProductsUpcUpcComparableRouteHandler)
  .openapi(getFoodProductsIdRoute, getFoodProductsIdRouteHandler)
  .openapi(getFoodProductsIdNutritionLabelRoute, getFoodProductsIdNutritionLabelRouteHandler)
  .openapi(getFoodProductsIdNutritionLabelPngRoute, getFoodProductsIdNutritionLabelPngRouteHandler)
  .openapi(getFoodProductsIdNutritionWidgetRoute, getFoodProductsIdNutritionWidgetRouteHandler)
  .openapi(
    getFoodProductsIdNutritionWidgetPngRoute,
    getFoodProductsIdNutritionWidgetPngRouteHandler,
  )
  .openapi(getFoodRestaurantsSearchRoute, getFoodRestaurantsSearchRouteHandler)
  .openapi(getFoodSearchRoute, getFoodSearchRouteHandler)
  .openapi(getFoodSiteSearchRoute, getFoodSiteSearchRouteHandler)
  .openapi(getFoodTriviaRandomRoute, getFoodTriviaRandomRouteHandler)
  .openapi(getFoodVideosSearchRoute, getFoodVideosSearchRouteHandler)
  .openapi(getFoodWineDescriptionRoute, getFoodWineDescriptionRouteHandler)
  .openapi(getFoodWineDishesRoute, getFoodWineDishesRouteHandler)
  .openapi(getFoodWinePairingRoute, getFoodWinePairingRouteHandler)
  .openapi(getFoodWineRecommendationRoute, getFoodWineRecommendationRouteHandler)
  .openapi(getMealplannerGenerateRoute, getMealplannerGenerateRouteHandler)
  .openapi(deleteMealplannerUsernameDayDateRoute, deleteMealplannerUsernameDayDateRouteHandler)
  .openapi(postMealplannerUsernameItemsRoute, postMealplannerUsernameItemsRouteHandler)
  .openapi(deleteMealplannerUsernameItemsIdRoute, deleteMealplannerUsernameItemsIdRouteHandler)
  .openapi(getMealplannerUsernameShoppingListRoute, getMealplannerUsernameShoppingListRouteHandler)
  .openapi(
    postMealplannerUsernameShoppingListItemsRoute,
    postMealplannerUsernameShoppingListItemsRouteHandler,
  )
  .openapi(
    deleteMealplannerUsernameShoppingListItemsIdRoute,
    deleteMealplannerUsernameShoppingListItemsIdRouteHandler,
  )
  .openapi(
    postMealplannerUsernameShoppingListStartDateEndDateRoute,
    postMealplannerUsernameShoppingListStartDateEndDateRouteHandler,
  )
  .openapi(getMealplannerUsernameTemplatesRoute, getMealplannerUsernameTemplatesRouteHandler)
  .openapi(postMealplannerUsernameTemplatesRoute, postMealplannerUsernameTemplatesRouteHandler)
  .openapi(
    deleteMealplannerUsernameTemplatesIdRoute,
    deleteMealplannerUsernameTemplatesIdRouteHandler,
  )
  .openapi(getMealplannerUsernameTemplatesIdRoute, getMealplannerUsernameTemplatesIdRouteHandler)
  .openapi(
    getMealplannerUsernameWeekStartDateRoute,
    getMealplannerUsernameWeekStartDateRouteHandler,
  )
  .openapi(postRecipesAnalyzeRoute, postRecipesAnalyzeRouteHandler)
  .openapi(postRecipesAnalyzeInstructionsRoute, postRecipesAnalyzeInstructionsRouteHandler)
  .openapi(getRecipesAutocompleteRoute, getRecipesAutocompleteRouteHandler)
  .openapi(getRecipesComplexSearchRoute, getRecipesComplexSearchRouteHandler)
  .openapi(getRecipesConvertRoute, getRecipesConvertRouteHandler)
  .openapi(postRecipesCuisineRoute, postRecipesCuisineRouteHandler)
  .openapi(getRecipesExtractRoute, getRecipesExtractRouteHandler)
  .openapi(getRecipesFindByIngredientsRoute, getRecipesFindByIngredientsRouteHandler)
  .openapi(getRecipesFindByNutrientsRoute, getRecipesFindByNutrientsRouteHandler)
  .openapi(getRecipesGuessNutritionRoute, getRecipesGuessNutritionRouteHandler)
  .openapi(getRecipesInformationBulkRoute, getRecipesInformationBulkRouteHandler)
  .openapi(postRecipesParseIngredientsRoute, postRecipesParseIngredientsRouteHandler)
  .openapi(getRecipesQueriesAnalyzeRoute, getRecipesQueriesAnalyzeRouteHandler)
  .openapi(getRecipesQuickAnswerRoute, getRecipesQuickAnswerRouteHandler)
  .openapi(getRecipesRandomRoute, getRecipesRandomRouteHandler)
  .openapi(postRecipesVisualizeEquipmentRoute, postRecipesVisualizeEquipmentRouteHandler)
  .openapi(postRecipesVisualizeIngredientsRoute, postRecipesVisualizeIngredientsRouteHandler)
  .openapi(postRecipesVisualizeNutritionRoute, postRecipesVisualizeNutritionRouteHandler)
  .openapi(postRecipesVisualizePriceEstimatorRoute, postRecipesVisualizePriceEstimatorRouteHandler)
  .openapi(postRecipesVisualizeRecipeRoute, postRecipesVisualizeRecipeRouteHandler)
  .openapi(postRecipesVisualizeTasteRoute, postRecipesVisualizeTasteRouteHandler)
  .openapi(getRecipesIdAnalyzedInstructionsRoute, getRecipesIdAnalyzedInstructionsRouteHandler)
  .openapi(getRecipesIdCardRoute, getRecipesIdCardRouteHandler)
  .openapi(getRecipesIdEquipmentWidgetRoute, getRecipesIdEquipmentWidgetRouteHandler)
  .openapi(getRecipesIdEquipmentWidgetJsonRoute, getRecipesIdEquipmentWidgetJsonRouteHandler)
  .openapi(getRecipesIdEquipmentWidgetPngRoute, getRecipesIdEquipmentWidgetPngRouteHandler)
  .openapi(getRecipesIdInformationRoute, getRecipesIdInformationRouteHandler)
  .openapi(getRecipesIdIngredientWidgetRoute, getRecipesIdIngredientWidgetRouteHandler)
  .openapi(getRecipesIdIngredientWidgetJsonRoute, getRecipesIdIngredientWidgetJsonRouteHandler)
  .openapi(getRecipesIdIngredientWidgetPngRoute, getRecipesIdIngredientWidgetPngRouteHandler)
  .openapi(getRecipesIdNutritionLabelRoute, getRecipesIdNutritionLabelRouteHandler)
  .openapi(getRecipesIdNutritionLabelPngRoute, getRecipesIdNutritionLabelPngRouteHandler)
  .openapi(getRecipesIdNutritionWidgetRoute, getRecipesIdNutritionWidgetRouteHandler)
  .openapi(getRecipesIdNutritionWidgetJsonRoute, getRecipesIdNutritionWidgetJsonRouteHandler)
  .openapi(getRecipesIdNutritionWidgetPngRoute, getRecipesIdNutritionWidgetPngRouteHandler)
  .openapi(getRecipesIdPriceBreakdownWidgetRoute, getRecipesIdPriceBreakdownWidgetRouteHandler)
  .openapi(
    getRecipesIdPriceBreakdownWidgetJsonRoute,
    getRecipesIdPriceBreakdownWidgetJsonRouteHandler,
  )
  .openapi(
    getRecipesIdPriceBreakdownWidgetPngRoute,
    getRecipesIdPriceBreakdownWidgetPngRouteHandler,
  )
  .openapi(getRecipesIdSimilarRoute, getRecipesIdSimilarRouteHandler)
  .openapi(getRecipesIdSummaryRoute, getRecipesIdSummaryRouteHandler)
  .openapi(getRecipesIdTasteWidgetRoute, getRecipesIdTasteWidgetRouteHandler)
  .openapi(getRecipesIdTasteWidgetJsonRoute, getRecipesIdTasteWidgetJsonRouteHandler)
  .openapi(getRecipesIdTasteWidgetPngRoute, getRecipesIdTasteWidgetPngRouteHandler)
  .openapi(postUsersConnectRoute, postUsersConnectRouteHandler)

export default app
