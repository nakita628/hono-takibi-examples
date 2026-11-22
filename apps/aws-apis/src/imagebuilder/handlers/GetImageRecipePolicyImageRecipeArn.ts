import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetImageRecipePolicyImageRecipeArnRoute } from '../routes'

const app = new OpenAPIHono()

export const GetImageRecipePolicyImageRecipeArnHandler = app.openapi(
  getGetImageRecipePolicyImageRecipeArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
