import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetImageRecipePolicyImageRecipeArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getImageRecipePolicyImageRecipeArnHandler = app.openapi(
  getGetImageRecipePolicyImageRecipeArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
