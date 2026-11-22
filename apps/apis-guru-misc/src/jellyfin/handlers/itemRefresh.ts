import { OpenAPIHono } from '@hono/zod-openapi'
import { postItemsItemIdRefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const itemRefreshHandler = app.openapi(postItemsItemIdRefreshRoute, (c) => {
  throw new Error('Not implemented')
})
