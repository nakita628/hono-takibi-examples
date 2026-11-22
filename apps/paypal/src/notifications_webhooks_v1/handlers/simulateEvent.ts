import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NotificationsSimulateEventRoute } from '../routes'

const app = new OpenAPIHono()

export const simulateEventHandler = app.openapi(postV1NotificationsSimulateEventRoute, (c) => {
  throw new Error('Not implemented')
})
