import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthTestRoute } from '../routes'

const app = new OpenAPIHono()

export const authTestHandler = app.openapi(getAuthTestRoute, (c) => {
  throw new Error('Not implemented')
})
