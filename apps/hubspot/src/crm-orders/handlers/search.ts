import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609OrdersSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609OrdersSearchRoute, (c) => {
  throw new Error('Not implemented')
})
