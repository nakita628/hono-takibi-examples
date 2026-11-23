import { OpenAPIHono } from '@hono/zod-openapi'
import { postItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app.openapi(postItemsRoute, (c) => {
  throw new Error('Not implemented')
})
