import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2TicketAuditsRoute,
  getApiV2TicketsTicketIdAuditsCountRoute,
  getApiV2TicketsTicketIdAuditsRoute,
  getApiV2TicketsTicketIdAuditsTicketAuditIdRoute,
  putApiV2TicketsTicketIdAuditsTicketAuditIdMakePrivateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketAuditsHandler = app
  .openapi(getApiV2TicketAuditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdAuditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdAuditsTicketAuditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdAuditsTicketAuditIdMakePrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdAuditsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
