import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdMessagesMessageIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute,
  deleteUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdMessagesMessageIdRoute,
  deleteUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdMessagesMessageIdAttachmentsAttachmentIdRoute,
  getUsersUserIdMessagesMessageIdAttachmentsRoute,
  getUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute,
  getUsersUserIdMessagesMessageIdExtensionsRoute,
  getUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdMessagesMessageIdRoute,
  getUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdMessagesMessageIdValueRoute,
  getUsersUserIdMessagesRoute,
  patchUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute,
  patchUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdMessagesMessageIdRoute,
  patchUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  postUsersUserIdMessagesMessageIdAttachmentsRoute,
  postUsersUserIdMessagesMessageIdExtensionsRoute,
  postUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdMessagesRoute,
  putUsersUserIdMessagesMessageIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersMessageHandler = app
  .openapi(getUsersUserIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMessagesMessageIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
