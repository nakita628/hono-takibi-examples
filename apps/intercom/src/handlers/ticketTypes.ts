import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTicketTypesRoute,
  getTicketTypesTicketTypeIdRoute,
  postTicketTypesRoute,
  putTicketTypesTicketTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketTypesHandler = app
  .openapi(getTicketTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTicketTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTicketTypesTicketTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTicketTypesTicketTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
