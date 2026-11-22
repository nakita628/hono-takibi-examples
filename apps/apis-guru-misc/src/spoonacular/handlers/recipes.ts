import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  postFoodIngredientsGlycemicLoadRoute,
  postRecipesAnalyzeInstructionsRoute,
  postRecipesAnalyzeRoute,
  postRecipesCuisineRoute,
  postRecipesParseIngredientsRoute,
  postRecipesVisualizeEquipmentRoute,
  postRecipesVisualizeNutritionRoute,
  postRecipesVisualizePriceEstimatorRoute,
  postRecipesVisualizeRecipeRoute,
  postRecipesVisualizeTasteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recipesHandler = app
  .openapi(postFoodIngredientsGlycemicLoadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesAnalyzeInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesComplexSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesCuisineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesExtractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesFindByIngredientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesFindByNutrientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesGuessNutritionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesInformationBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesParseIngredientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesQueriesAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesQuickAnswerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesVisualizeEquipmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesVisualizeNutritionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesVisualizePriceEstimatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesVisualizeRecipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesVisualizeTasteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdAnalyzedInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdEquipmentWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdEquipmentWidgetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdEquipmentWidgetPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdIngredientWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdIngredientWidgetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdNutritionLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdNutritionLabelPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdNutritionWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdNutritionWidgetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdNutritionWidgetPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdPriceBreakdownWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdPriceBreakdownWidgetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdPriceBreakdownWidgetPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdTasteWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdTasteWidgetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdTasteWidgetPngRoute, (c) => {
    throw new Error('Not implemented')
  })
