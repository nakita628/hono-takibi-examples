import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdThreadsConversationThreadIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsRoute,
  getGroupsGroupIdThreadsConversationThreadIdRoute,
  getGroupsGroupIdThreadsRoute,
  patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
  patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
  patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdThreadsConversationThreadIdRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesRoute,
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
  .openapi(deleteGroupsGroupIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdThreadsConversationThreadIdRoute, (c) => {
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
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsAttachmentIdRoute,
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
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsAttachmentIdRoute,
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
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
