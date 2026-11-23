import { OpenAPIHono } from '@hono/zod-openapi'
import { getDebugRoute } from '../routes'

const app = new OpenAPIHono()

export const debugHandler = app.openapi(getDebugRoute, (c) => {
  throw new Error('Not implemented')
})
