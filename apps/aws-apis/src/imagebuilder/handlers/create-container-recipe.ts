import { OpenAPIHono } from '@hono/zod-openapi'
import { putCreateContainerRecipeRoute } from '../routes'

const app = new OpenAPIHono()

export const createContainerRecipeHandler = app.openapi(putCreateContainerRecipeRoute, (c) => {
  throw new Error('Not implemented')
})
