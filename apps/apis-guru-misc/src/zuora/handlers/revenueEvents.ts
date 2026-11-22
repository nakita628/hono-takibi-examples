import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1RevenueEventsEventNumberRoute,
  getV1RevenueEventsRevenueSchedulesRsNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const revenueEventsHandler = app
  .openapi(getV1RevenueEventsRevenueSchedulesRsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueEventsEventNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
