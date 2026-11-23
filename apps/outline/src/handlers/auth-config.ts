import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const authConfigHandler = app.openapi(postAuthConfigRoute, (c) => {
  throw new Error('Not implemented')
})
