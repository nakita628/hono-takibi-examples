import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2IncrementalTicketMetricEventsRoute,
  getApiV2TicketsTicketIdMetricEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketMetricEventsHandler = app
  .openapi(getApiV2IncrementalTicketMetricEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdMetricEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
