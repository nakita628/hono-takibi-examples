import { OpenAPIHono } from '@hono/zod-openapi'
import { getScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const scheduleHandler = app.openapi(getScheduleRoute, (c) => {
  throw new Error('Not implemented')
})
