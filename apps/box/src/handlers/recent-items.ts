import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecentItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const recentItemsHandler = app.openapi(getRecentItemsRoute, (c) => {
  throw new Error('Not implemented')
})
