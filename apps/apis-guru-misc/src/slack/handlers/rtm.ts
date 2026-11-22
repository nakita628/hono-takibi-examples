import { OpenAPIHono } from '@hono/zod-openapi'
import { getRtmConnectRoute } from '../routes'

const app = new OpenAPIHono()

export const rtmHandler = app.openapi(getRtmConnectRoute, (c) => {
  throw new Error('Not implemented')
})
