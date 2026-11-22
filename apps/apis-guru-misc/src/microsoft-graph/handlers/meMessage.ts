import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeMessagesMessageIdAttachmentsAttachmentIdRoute,
  deleteMeMessagesMessageIdExtensionsExtensionIdRoute,
  deleteMeMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeMessagesMessageIdRoute,
  deleteMeMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeMessagesMessageIdAttachmentsAttachmentIdRoute,
  getMeMessagesMessageIdAttachmentsRoute,
  getMeMessagesMessageIdExtensionsExtensionIdRoute,
  getMeMessagesMessageIdExtensionsRoute,
  getMeMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeMessagesMessageIdMultiValueExtendedPropertiesRoute,
  getMeMessagesMessageIdRoute,
  getMeMessagesMessageIdSingleValueExtendedPropertiesRoute,
  getMeMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeMessagesMessageIdValueRoute,
  getMeMessagesRoute,
  patchMeMessagesMessageIdExtensionsExtensionIdRoute,
  patchMeMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeMessagesMessageIdRoute,
  patchMeMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  postMeMessagesMessageIdAttachmentsRoute,
  postMeMessagesMessageIdExtensionsRoute,
  postMeMessagesMessageIdMultiValueExtendedPropertiesRoute,
  postMeMessagesMessageIdSingleValueExtendedPropertiesRoute,
  postMeMessagesRoute,
  putMeMessagesMessageIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meMessageHandler = app
  .openapi(getMeMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMessagesMessageIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeMessagesMessageIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeMessagesMessageIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeMessagesMessageIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
