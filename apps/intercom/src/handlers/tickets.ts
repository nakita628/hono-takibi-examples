import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTicketsTicketIdLinkedConversationsIdRoute,
  deleteTicketsTicketIdRoute,
  deleteTicketsTicketIdTagsTagIdRoute,
  getTicketsTicketIdRoute,
  postTicketsEnqueueRoute,
  postTicketsRoute,
  postTicketsSearchRoute,
  postTicketsTicketIdChangeTypeRoute,
  postTicketsTicketIdLinkedConversationsRoute,
  postTicketsTicketIdReplyRoute,
  postTicketsTicketIdTagsRoute,
  putTicketsTicketIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketsHandler = app
  .openapi(postTicketsTicketIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTicketsTicketIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTicketsTicketIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTicketsTicketIdLinkedConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTicketsTicketIdLinkedConversationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTicketsEnqueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTicketsTicketIdChangeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTicketsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
