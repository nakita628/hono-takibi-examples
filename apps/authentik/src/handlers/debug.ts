import { OpenAPIHono } from '@hono/zod-openapi'
import { postDebugLogIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const debugHandler = app.openapi(postDebugLogIndexRoute, (c) => {
  throw new Error('Not implemented')
})
