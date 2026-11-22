import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2SkipsRoute,
  getApiV2TicketsTicketIdSkipsRoute,
  getApiV2UsersUserIdSkipsRoute,
  postApiV2SkipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketSkipsHandler = app
  .openapi(getApiV2SkipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SkipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdSkipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdSkipsRoute, (c) => {
    throw new Error('Not implemented')
  })
