import { OpenAPIHono } from '@hono/zod-openapi'
import { postListApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListApplicationsHandler = app.openapi(postListApplicationsRoute, (c) => {
  throw new Error('Not implemented')
})
