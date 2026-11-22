import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app.openapi(postAuthRoute, (c) => {
  throw new Error('Not implemented')
})
