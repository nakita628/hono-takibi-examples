import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SignalRoute } from '../routes'

const app = new OpenAPIHono()

export const signalHandler = app.openapi(postV1SignalRoute, (c) => {
  throw new Error('Not implemented')
})
