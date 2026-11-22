import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetContainerRecipePolicyContainerRecipeArnRoute } from '../routes'

const app = new OpenAPIHono()

export const GetContainerRecipePolicyContainerRecipeArnHandler = app.openapi(
  getGetContainerRecipePolicyContainerRecipeArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
