import { OpenAPIHono } from '@hono/zod-openapi'
import { getInventoryRoute } from '../routes'

const app = new OpenAPIHono()

export const inventoryHandler = app.openapi(getInventoryRoute, (c) => {
  throw new Error('Not implemented')
})
