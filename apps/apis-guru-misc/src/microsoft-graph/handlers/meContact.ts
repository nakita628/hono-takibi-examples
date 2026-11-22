import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeContactsContactIdExtensionsExtensionIdRoute,
  deleteMeContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeContactsContactIdRoute,
  deleteMeContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeContactsContactIdExtensionsExtensionIdRoute,
  getMeContactsContactIdExtensionsRoute,
  getMeContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeContactsContactIdMultiValueExtendedPropertiesRoute,
  getMeContactsContactIdPhotoRoute,
  getMeContactsContactIdPhotoValueRoute,
  getMeContactsContactIdRoute,
  getMeContactsContactIdSingleValueExtendedPropertiesRoute,
  getMeContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeContactsRoute,
  patchMeContactsContactIdExtensionsExtensionIdRoute,
  patchMeContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeContactsContactIdPhotoRoute,
  patchMeContactsContactIdRoute,
  patchMeContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  postMeContactsContactIdExtensionsRoute,
  postMeContactsContactIdMultiValueExtendedPropertiesRoute,
  postMeContactsContactIdSingleValueExtendedPropertiesRoute,
  postMeContactsRoute,
  putMeContactsContactIdPhotoValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meContactHandler = app
  .openapi(getMeContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeContactsContactIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeContactsContactIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeContactsContactIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeContactsContactIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeContactsContactIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeContactsContactIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
