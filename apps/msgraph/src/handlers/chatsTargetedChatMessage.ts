import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  getChatsChatIdTargetedMessagesCountRoute,
  getChatsChatIdTargetedMessagesRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsCountRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsCountRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesCountRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesDeltaRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  patchChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  patchChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  postChatsChatIdTargetedMessagesRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSetReactionRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSoftDeleteRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUndoSoftDeleteRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUnsetReactionRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesReplyWithQuoteRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute,
  putChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsTargetedChatMessageHandler = app
  .openapi(getChatsChatIdTargetedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdTargetedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdTargetedMessagesTargetedChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdTargetedMessagesTargetedChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdTargetedMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
