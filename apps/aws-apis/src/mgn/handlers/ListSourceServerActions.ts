import { OpenAPIHono } from '@hono/zod-openapi'
import { postListSourceServerActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListSourceServerActionsHandler = app.openapi(postListSourceServerActionsRoute, (c) => {
  throw new Error('Not implemented')
})
