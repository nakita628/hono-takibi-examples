import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateGroupQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const updateGroupQueryHandler = app.openapi(postUpdateGroupQueryRoute, (c) => {
  throw new Error('Not implemented')
})
