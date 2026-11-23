import { OpenAPIHono } from '@hono/zod-openapi'
import { postDecodeStringRoute } from '../routes'

const app = new OpenAPIHono()

export const decodeStringHandler = app.openapi(postDecodeStringRoute, (c) => {
  throw new Error('Not implemented')
})
