import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecipeIdRoute,
  getRecipeAutocompleteAllRoute,
  getRecipeAutocompleteMineRoute,
  getRecipeAutocompleteRoute,
  getRecipeCategoriesRoute,
  getRecipeGetActiveRecipeRoute,
  getRecipeIdRoute,
  getRecipeIdZapRoute,
  getRecipeRecipeIdRelatedRoute,
  getRecipesIdRoute,
  getRecipesRandomRoute,
  getRecipesRavesRoute,
  getRecipesRecentviewsRoute,
  getRecipesRoute,
  getRecipeStepsIdRoute,
  getRecipesTop25randomRoute,
  postRecipeGetSavedStepRoute,
  postRecipeGetStepNumberRoute,
  postRecipePostStepRoute,
  postRecipeRecipeIdFeedbackRoute,
  postRecipeRoute,
  postRecipeScanRoute,
  putRecipeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recipeHandler = app
  .openapi(postRecipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeAutocompleteAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeAutocompleteMineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeGetActiveRecipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeGetSavedStepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeGetStepNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipePostStepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeStepsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecipeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeIdZapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeRecipeIdFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesRavesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesRecentviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesTop25randomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
