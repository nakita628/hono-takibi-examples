import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TicketContentPinsContentPinIdRoute,
  getApiV2TicketContentPinsRoute,
  postApiV2TicketContentPinsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketContentPinsHandler = app
  .openapi(getApiV2TicketContentPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketContentPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketContentPinsContentPinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
