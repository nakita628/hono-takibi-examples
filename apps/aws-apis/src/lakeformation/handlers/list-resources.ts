import { OpenAPIHono } from '@hono/zod-openapi'
import { postListResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const listResourcesHandler = app.openapi(postListResourcesRoute, (c) => {
  throw new Error('Not implemented')
})
