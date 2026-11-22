import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CalendarRoute,
  getV2ClockRoute,
  getV3CalendarMarketRoute,
  getV3ClockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarHandler = app
  .openapi(getV2CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ClockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3CalendarMarketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ClockRoute, (c) => {
    throw new Error('Not implemented')
  })
