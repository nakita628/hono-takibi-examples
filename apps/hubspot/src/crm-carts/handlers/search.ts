import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609CartsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609CartsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
