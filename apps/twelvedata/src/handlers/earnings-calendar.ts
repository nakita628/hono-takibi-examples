import { OpenAPIHono } from '@hono/zod-openapi'
import { getEarningsCalendarRoute } from '../routes'

const app = new OpenAPIHono()

export const earningsCalendarHandler = app.openapi(getEarningsCalendarRoute, (c) => {
  throw new Error('Not implemented')
})
