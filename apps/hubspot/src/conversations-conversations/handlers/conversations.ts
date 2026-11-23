import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversations202609ThreadsThreadIdAssigneeRoute,
  deleteConversationsConversations202609ThreadsThreadIdRoute,
  getConversationsConversations202609ActorsActorIdRoute,
  getConversationsConversations202609ChannelAccountsChannelAccountIdRoute,
  getConversationsConversations202609ChannelAccountsRoute,
  getConversationsConversations202609ChannelsChannelIdRoute,
  getConversationsConversations202609ChannelsRoute,
  getConversationsConversations202609InboxesInboxIdRoute,
  getConversationsConversations202609InboxesRoute,
  getConversationsConversations202609ThreadsRoute,
  getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentRoute,
  getConversationsConversations202609ThreadsThreadIdMessagesMessageIdRoute,
  getConversationsConversations202609ThreadsThreadIdMessagesRoute,
  getConversationsConversations202609ThreadsThreadIdRoute,
  patchConversationsConversations202609ThreadsThreadIdRoute,
  postConversationsConversations202609ActorsBatchReadRoute,
  postConversationsConversations202609ThreadsThreadIdMessagesRoute,
  putConversationsConversations202609ThreadsThreadIdAssigneeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(postConversationsConversations202609ActorsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ActorsActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ChannelAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ChannelAccountsChannelAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609InboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609InboxesInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversations202609ThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConversationsConversations202609ThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversations202609ThreadsThreadIdAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversations202609ThreadsThreadIdAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ThreadsThreadIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversations202609ThreadsThreadIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ThreadsThreadIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
