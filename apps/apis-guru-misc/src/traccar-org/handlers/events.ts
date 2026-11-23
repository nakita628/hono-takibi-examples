import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app.openapi(getEventsIdRoute, (c) => {
  throw new Error('Not implemented')
})
