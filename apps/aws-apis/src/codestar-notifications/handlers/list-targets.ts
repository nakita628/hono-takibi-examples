import { OpenAPIHono } from '@hono/zod-openapi'
import { postListTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const listTargetsHandler = app.openapi(postListTargetsRoute, (c) => {
  throw new Error('Not implemented')
})
