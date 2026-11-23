import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const getEventsHandler = app.openapi(getGetEventsRoute, (c) => {
  throw new Error('Not implemented')
})
