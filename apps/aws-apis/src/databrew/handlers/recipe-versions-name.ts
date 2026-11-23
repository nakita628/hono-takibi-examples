import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecipeVersionsNameRoute } from '../routes'

const app = new OpenAPIHono()

export const recipeVersionsNameHandler = app.openapi(getRecipeVersionsNameRoute, (c) => {
  throw new Error('Not implemented')
})
