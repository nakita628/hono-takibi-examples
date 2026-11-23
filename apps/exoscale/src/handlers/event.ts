import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventRoute } from '../routes'

const app = new OpenAPIHono()

export const eventHandler = app.openapi(getEventRoute, (c) => {
  throw new Error('Not implemented')
})
