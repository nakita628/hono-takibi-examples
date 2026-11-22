import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1EventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app.openapi(postApiV1EventsRoute, (c) => {
  throw new Error('Not implemented')
})
