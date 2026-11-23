import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetContainerRecipePolicyContainerRecipeArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getContainerRecipePolicyContainerRecipeArnHandler = app.openapi(
  getGetContainerRecipePolicyContainerRecipeArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
