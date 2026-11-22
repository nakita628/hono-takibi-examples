import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteImageRecipeImageRecipeArnRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteImageRecipeImageRecipeArnHandler = app.openapi(
  deleteDeleteImageRecipeImageRecipeArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
