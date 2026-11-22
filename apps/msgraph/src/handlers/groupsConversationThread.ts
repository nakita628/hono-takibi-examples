import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsRoute,
  getGroupsGroupIdThreadsConversationThreadIdRoute,
  getGroupsGroupIdThreadsCountRoute,
  getGroupsGroupIdThreadsRoute,
  patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  patchGroupsGroupIdThreadsConversationThreadIdRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsCreateUploadSessionRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdForwardRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCreateUploadSessionRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToForwardRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToReplyRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdReplyRoute,
  postGroupsGroupIdThreadsConversationThreadIdReplyRoute,
  postGroupsGroupIdThreadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsConversationThreadHandler = app
  .openapi(getGroupsGroupIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdThreadsConversationThreadIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdThreadsConversationThreadIdPostsPostIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdThreadsConversationThreadIdPostsPostIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
