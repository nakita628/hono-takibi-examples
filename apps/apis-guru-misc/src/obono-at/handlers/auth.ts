import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app.openapi(getAuthRoute, (c) => {
  throw new Error('Not implemented')
})
