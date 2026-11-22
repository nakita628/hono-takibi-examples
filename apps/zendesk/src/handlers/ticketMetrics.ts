import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2TicketMetricsRoute,
  getApiV2TicketMetricsTicketMetricIdRoute,
  getApiV2TicketsTicketIdMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketMetricsHandler = app
  .openapi(getApiV2TicketMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketMetricsTicketMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
