import { OpenAPIHono } from '@hono/zod-openapi'
import { getBroadcastsRoute } from '../routes'

const app = new OpenAPIHono()

export const broadcastsHandler = app.openapi(getBroadcastsRoute, (c) => {
  throw new Error('Not implemented')
})
