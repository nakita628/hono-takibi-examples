import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609TasksSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609TasksSearchRoute, (c) => {
  throw new Error('Not implemented')
})
