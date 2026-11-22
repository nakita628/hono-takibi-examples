import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetImageRecipeImageRecipeArnRoute } from '../routes'

const app = new OpenAPIHono()

export const GetImageRecipeImageRecipeArnHandler = app.openapi(
  getGetImageRecipeImageRecipeArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
