import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609EmailsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609EmailsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
