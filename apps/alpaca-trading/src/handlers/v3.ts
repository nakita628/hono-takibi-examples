import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3CalendarMarketRoute, getV3ClockRoute } from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3CalendarMarketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ClockRoute, (c) => {
    throw new Error('Not implemented')
  })
