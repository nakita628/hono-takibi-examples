import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2DmEventsEventIdRoute,
  get2DmConversationsIdDmEventsRoute,
  get2DmConversationsMediaDmIdMediaIdResourceIdRoute,
  get2DmConversationsWithParticipantIdDmEventsRoute,
  get2DmEventsEventIdRoute,
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
  .openapi(get2DmConversationsMediaDmIdMediaIdResourceIdRoute, (c) => {
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
  .openapi(delete2DmEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2DmEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
