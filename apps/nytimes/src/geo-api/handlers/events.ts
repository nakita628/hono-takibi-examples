import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app.openapi(getQueryJsonRoute, (c) => {
  throw new Error('Not implemented')
})
