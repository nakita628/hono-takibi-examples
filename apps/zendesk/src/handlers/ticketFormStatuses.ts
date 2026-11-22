import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TicketFormsTicketFormIdTicketFormStatusesRoute,
  deleteApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRoute,
  getApiV2TicketFormStatusesRoute,
  getApiV2TicketFormStatusesShowManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketFormStatusesHandler = app
  .openapi(getApiV2TicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFormStatusesShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketFormsTicketFormIdTicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
