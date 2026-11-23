import { OpenAPIHono } from '@hono/zod-openapi'
import { postAvailableProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const availableHandler = app.openapi(postAvailableProductsRoute, (c) => {
  throw new Error('Not implemented')
})
