import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthLogoutRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app.openapi(postAuthLogoutRoute, (c) => {
  throw new Error('Not implemented')
})
