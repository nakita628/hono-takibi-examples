import { OpenAPIHono } from '@hono/zod-openapi'
import { getCalendarRoute } from '../routes'

const app = new OpenAPIHono()

export const calendarHandler = app.openapi(getCalendarRoute, (c) => {
  throw new Error('Not implemented')
})
