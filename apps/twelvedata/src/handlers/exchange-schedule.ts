import { OpenAPIHono } from '@hono/zod-openapi'
import { getExchangeScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const exchangeScheduleHandler = app.openapi(getExchangeScheduleRoute, (c) => {
  throw new Error('Not implemented')
})
