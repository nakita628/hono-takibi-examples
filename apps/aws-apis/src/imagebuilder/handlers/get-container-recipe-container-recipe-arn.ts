import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetContainerRecipeContainerRecipeArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getContainerRecipeContainerRecipeArnHandler = app.openapi(
  getGetContainerRecipeContainerRecipeArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
