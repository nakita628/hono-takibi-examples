import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteImageRecipeImageRecipeArnRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteImageRecipeImageRecipeArnHandler = app.openapi(
  deleteDeleteImageRecipeImageRecipeArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
