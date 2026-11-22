import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609CallsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609CallsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
