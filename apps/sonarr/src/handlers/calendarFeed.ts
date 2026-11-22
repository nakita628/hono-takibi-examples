import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeedV3CalendarSonarrIcsRoute } from '../routes'

const app = new OpenAPIHono()

export const calendarFeedHandler = app.openapi(getFeedV3CalendarSonarrIcsRoute, (c) => {
  throw new Error('Not implemented')
})
