import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609LineItemsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609LineItemsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
