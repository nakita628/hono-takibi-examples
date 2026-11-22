import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1RealtimeRoute } from '../routes'

const app = new OpenAPIHono()

export const realtimeHandler = app.openapi(getV1RealtimeRoute, (c) => {
  throw new Error('Not implemented')
})
