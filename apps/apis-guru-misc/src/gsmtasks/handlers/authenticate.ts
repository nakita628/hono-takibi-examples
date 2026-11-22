import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthenticateIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticateHandler = app.openapi(postAuthenticateIndexRoute, (c) => {
  throw new Error('Not implemented')
})
