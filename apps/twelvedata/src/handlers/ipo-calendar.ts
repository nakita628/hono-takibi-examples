import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpoCalendarRoute } from '../routes'

const app = new OpenAPIHono()

export const ipoCalendarHandler = app.openapi(getIpoCalendarRoute, (c) => {
  throw new Error('Not implemented')
})
