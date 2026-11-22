import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609PostalMailSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609PostalMailSearchRoute, (c) => {
  throw new Error('Not implemented')
})
