import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CalendarRoute,
  getV1ClockRoute,
  getV2CalendarMarketRoute,
  getV2ClockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarHandler = app
  .openapi(getV1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarMarketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ClockRoute, (c) => {
    throw new Error('Not implemented')
  })
