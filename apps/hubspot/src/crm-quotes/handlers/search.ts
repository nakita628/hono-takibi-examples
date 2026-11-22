import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609QuotesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609QuotesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
