import { OpenAPIHono } from '@hono/zod-openapi'
import { getSuperfundProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const superfundProductsHandler = app.openapi(getSuperfundProductsRoute, (c) => {
  throw new Error('Not implemented')
})
