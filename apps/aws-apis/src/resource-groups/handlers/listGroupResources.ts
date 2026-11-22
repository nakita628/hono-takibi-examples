import { OpenAPIHono } from '@hono/zod-openapi'
import { postListGroupResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const listGroupResourcesHandler = app.openapi(postListGroupResourcesRoute, (c) => {
  throw new Error('Not implemented')
})
