import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1CalendarIdRoute, getApiV1CalendarRoute } from '../routes'

const app = new OpenAPIHono()

export const calendarHandler = app
  .openapi(getApiV1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
