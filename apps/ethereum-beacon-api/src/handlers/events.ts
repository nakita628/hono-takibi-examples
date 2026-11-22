import { OpenAPIHono } from '@hono/zod-openapi'
import { getEthV1EventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app.openapi(getEthV1EventsRoute, (c) => {
  throw new Error('Not implemented')
})
