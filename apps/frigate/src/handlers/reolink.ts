import { OpenAPIHono } from '@hono/zod-openapi'
import { getReolinkDetectRoute } from '../routes'

const app = new OpenAPIHono()

export const reolinkHandler = app.openapi(getReolinkDetectRoute, (c) => {
  throw new Error('Not implemented')
})
