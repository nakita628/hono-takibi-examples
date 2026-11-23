import { OpenAPIHono } from '@hono/zod-openapi'
import { postRecipeJobsRoute, putRecipeJobsNameRoute } from '../routes'

const app = new OpenAPIHono()

export const recipeJobsHandler = app
  .openapi(postRecipeJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeJobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
