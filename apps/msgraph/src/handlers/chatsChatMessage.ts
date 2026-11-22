import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteChatsChatIdMessagesChatMessageIdRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsCountRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getChatsChatIdMessagesChatMessageIdRepliesCountRoute,
  getChatsChatIdMessagesChatMessageIdRepliesDeltaRoute,
  getChatsChatIdMessagesChatMessageIdRepliesRoute,
  getChatsChatIdMessagesChatMessageIdRoute,
  getChatsChatIdMessagesCountRoute,
  getChatsChatIdMessagesDeltaRoute,
  getChatsChatIdMessagesRoute,
  patchChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchChatsChatIdMessagesChatMessageIdRoute,
  postChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postChatsChatIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postChatsChatIdMessagesChatMessageIdRepliesRoute,
  postChatsChatIdMessagesChatMessageIdSetReactionRoute,
  postChatsChatIdMessagesChatMessageIdSoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdUndoSoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdUnsetReactionRoute,
  postChatsChatIdMessagesReplyWithQuoteRoute,
  postChatsChatIdMessagesRoute,
  putChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsChatMessageHandler = app
  .openapi(getChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(
    deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getChatsChatIdMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdSetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdUndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdUnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(
    deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdRepliesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
