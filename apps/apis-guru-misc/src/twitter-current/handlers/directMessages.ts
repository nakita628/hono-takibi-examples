import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get2DmConversationsIdDmEventsRoute,
  get2DmConversationsWithParticipantIdDmEventsRoute,
  get2DmEventsRoute,
  post2DmConversationsDmConversationIdMessagesRoute,
  post2DmConversationsRoute,
  post2DmConversationsWithParticipantIdMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directMessagesHandler = app
  .openapi(post2DmConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2DmConversationsWithParticipantIdDmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2DmConversationsWithParticipantIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2DmConversationsDmConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2DmConversationsIdDmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2DmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
