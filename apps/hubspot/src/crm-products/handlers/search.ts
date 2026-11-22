import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609ProductsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609ProductsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
