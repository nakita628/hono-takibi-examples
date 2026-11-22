import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteChatsChatIdMessagesChatMessageIdRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getChatsChatIdMessagesChatMessageIdRepliesRoute,
  getChatsChatIdMessagesChatMessageIdRoute,
  getChatsChatIdMessagesRoute,
  patchChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchChatsChatIdMessagesChatMessageIdRoute,
  postChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postChatsChatIdMessagesChatMessageIdRepliesRoute,
  postChatsChatIdMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsChatMessageHandler = app
  .openapi(getChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
