import { OpenAPIHono } from '@hono/zod-openapi'
import { postEventsListRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsListHandler = app.openapi(postEventsListRoute, (c) => {
  throw new Error('Not implemented')
})
