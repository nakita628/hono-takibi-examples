import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactsContactIdTagsTagIdRoute,
  deleteConversationsConversationIdTagsTagIdRoute,
  deleteTagsTagIdRoute,
  deleteTicketsTicketIdTagsTagIdRoute,
  getTagsRoute,
  getTagsTagIdRoute,
  postContactsContactIdTagsRoute,
  postConversationsConversationIdTagsRoute,
  postTagsRoute,
  postTicketsTicketIdTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(postContactsContactIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsContactIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTicketsTicketIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTicketsTicketIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
