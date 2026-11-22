import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteContainerRecipeContainerRecipeArnRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteContainerRecipeContainerRecipeArnHandler = app.openapi(
  deleteDeleteContainerRecipeContainerRecipeArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
