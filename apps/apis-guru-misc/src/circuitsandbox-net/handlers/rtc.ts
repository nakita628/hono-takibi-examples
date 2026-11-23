import { OpenAPIHono } from '@hono/zod-openapi'
import { getRtcSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const rtcHandler = app.openapi(getRtcSessionsRoute, (c) => {
  throw new Error('Not implemented')
})
