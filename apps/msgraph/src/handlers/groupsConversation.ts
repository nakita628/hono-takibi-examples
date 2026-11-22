import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdConversationsConversationIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute,
  getGroupsGroupIdConversationsConversationIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsRoute,
  getGroupsGroupIdConversationsCountRoute,
  getGroupsGroupIdConversationsRoute,
  patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsCreateUploadSessionRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdForwardRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCreateUploadSessionRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToForwardRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToReplyRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdReplyRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdReplyRoute,
  postGroupsGroupIdConversationsConversationIdThreadsRoute,
  postGroupsGroupIdConversationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsConversationHandler = app
  .openapi(getGroupsGroupIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdConversationsConversationIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdConversationsConversationIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdConversationsConversationIdThreadsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdConversationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
