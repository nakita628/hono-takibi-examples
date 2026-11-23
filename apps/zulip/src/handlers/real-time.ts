import { OpenAPIHono } from '@hono/zod-openapi'
import { postRealTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const realTimeHandler = app.openapi(postRealTimeRoute, (c) => {
  throw new Error('Not implemented')
})
