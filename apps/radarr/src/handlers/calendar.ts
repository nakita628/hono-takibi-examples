import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3CalendarRoute } from '../routes'

const app = new OpenAPIHono()

export const calendarHandler = app.openapi(getApiV3CalendarRoute, (c) => {
  throw new Error('Not implemented')
})
