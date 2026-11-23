import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  postFoodDetectRoute,
  postFoodIngredientsGlycemicLoadRoute,
  postFoodIngredientsMapRoute,
  postFoodProductsClassifyBatchRoute,
  postFoodProductsClassifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foodHandler = app
  .openapi(getFoodConverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodConverseSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodCustomFoodsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoodDetectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodImagesAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodImagesClassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodIngredientsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoodIngredientsGlycemicLoadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoodIngredientsMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodIngredientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodIngredientsSubstitutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodIngredientsIdAmountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodIngredientsIdInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodIngredientsIdSubstitutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodJokesRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsIdNutritionLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsIdNutritionLabelPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsIdNutritionWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsIdNutritionWidgetPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoodProductsClassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoodProductsClassifyBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsUpcUpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsUpcUpcComparableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsIdNutritionLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsIdNutritionLabelPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsIdNutritionWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsIdNutritionWidgetPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodRestaurantsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodSiteSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodTriviaRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodVideosSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodWineDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodWineDishesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodWinePairingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodWineRecommendationRoute, (c) => {
    throw new Error('Not implemented')
  })
