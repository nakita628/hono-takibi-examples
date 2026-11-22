import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609ObjectTypeSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609ObjectTypeSearchRoute, (c) => {
  throw new Error('Not implemented')
})
