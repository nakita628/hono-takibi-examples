import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609ProjectsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609ProjectsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
