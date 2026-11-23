import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecipesNameRecipeVersionRecipeVersionRoute,
  getRecipesNameRoute,
  getRecipesRoute,
  postRecipesNameBatchDeleteRecipeVersionRoute,
  postRecipesNamePublishRecipeRoute,
  postRecipesRoute,
  putRecipesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recipesHandler = app
  .openapi(postRecipesNameBatchDeleteRecipeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecipesNameRecipeVersionRecipeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipesNamePublishRecipeRoute, (c) => {
    throw new Error('Not implemented')
  })
