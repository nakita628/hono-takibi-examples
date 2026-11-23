import { OpenAPIHono } from '@hono/zod-openapi'
import { getSplitsCalendarRoute } from '../routes'

const app = new OpenAPIHono()

export const splitsCalendarHandler = app.openapi(getSplitsCalendarRoute, (c) => {
  throw new Error('Not implemented')
})
