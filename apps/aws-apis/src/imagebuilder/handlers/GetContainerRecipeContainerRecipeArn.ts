import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetContainerRecipeContainerRecipeArnRoute } from '../routes'

const app = new OpenAPIHono()

export const GetContainerRecipeContainerRecipeArnHandler = app.openapi(
  getGetContainerRecipeContainerRecipeArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
