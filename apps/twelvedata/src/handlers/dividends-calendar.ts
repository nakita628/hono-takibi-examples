import { OpenAPIHono } from '@hono/zod-openapi'
import { getDividendsCalendarRoute } from '../routes'

const app = new OpenAPIHono()

export const dividendsCalendarHandler = app.openapi(getDividendsCalendarRoute, (c) => {
  throw new Error('Not implemented')
})
