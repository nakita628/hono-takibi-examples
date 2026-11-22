import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFoodIngredientsAutocompleteRoute,
  getFoodIngredientsIdAmountRoute,
  getFoodIngredientsIdInformationRoute,
  getFoodIngredientsIdSubstitutesRoute,
  getFoodIngredientsSearchRoute,
  getFoodIngredientsSubstitutesRoute,
  getRecipesIdIngredientWidgetPngRoute,
  postFoodIngredientsMapRoute,
  postRecipesVisualizeIngredientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ingredientsHandler = app
  .openapi(getFoodIngredientsAutocompleteRoute, (c) => {
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
  .openapi(postRecipesVisualizeIngredientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdIngredientWidgetPngRoute, (c) => {
    throw new Error('Not implemented')
  })
