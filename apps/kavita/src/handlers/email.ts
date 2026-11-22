import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiEmailAllRoute } from '../routes'

const app = new OpenAPIHono()

export const emailHandler = app.openapi(getApiEmailAllRoute, (c) => {
  throw new Error('Not implemented')
})
