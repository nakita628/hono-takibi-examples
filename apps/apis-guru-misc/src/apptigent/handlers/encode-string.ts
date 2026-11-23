import { OpenAPIHono } from '@hono/zod-openapi'
import { postEncodeStringRoute } from '../routes'

const app = new OpenAPIHono()

export const encodeStringHandler = app.openapi(postEncodeStringRoute, (c) => {
  throw new Error('Not implemented')
})
