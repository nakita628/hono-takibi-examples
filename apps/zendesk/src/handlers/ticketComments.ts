import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2TicketsTicketIdCommentsCountRoute,
  getApiV2TicketsTicketIdCommentsRoute,
  putApiV2ChatFileRedactionsTicketIdRoute,
  putApiV2ChatRedactionsTicketIdRoute,
  putApiV2CommentRedactionsTicketCommentIdRoute,
  putApiV2TicketsTicketIdCommentsTicketCommentIdMakePrivateRoute,
  putApiV2TicketsTicketIdCommentsTicketCommentIdRedactRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketCommentsHandler = app
  .openapi(putApiV2ChatFileRedactionsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ChatRedactionsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CommentRedactionsTicketCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdCommentsTicketCommentIdMakePrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdCommentsTicketCommentIdRedactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdCommentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
