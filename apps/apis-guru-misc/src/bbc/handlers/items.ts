import { OpenAPIHono } from '@hono/zod-openapi'
import { getItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app.openapi(getItemsRoute, (c) => {
  throw new Error('Not implemented')
})
