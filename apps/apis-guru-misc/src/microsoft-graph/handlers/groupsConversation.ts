import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdConversationsConversationIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute,
  getGroupsGroupIdConversationsConversationIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute,
  getGroupsGroupIdConversationsConversationIdThreadsRoute,
  getGroupsGroupIdConversationsRoute,
  patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesRoute,
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
  .openapi(deleteGroupsGroupIdConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdConversationsConversationIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdConversationsConversationIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
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
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
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
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
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
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
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
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
