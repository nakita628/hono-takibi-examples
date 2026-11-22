import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdContactsContactIdExtensionsExtensionIdRoute,
  deleteUsersUserIdContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdContactsContactIdRoute,
  deleteUsersUserIdContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdContactsContactIdExtensionsExtensionIdRoute,
  getUsersUserIdContactsContactIdExtensionsRoute,
  getUsersUserIdContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdContactsContactIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdContactsContactIdPhotoRoute,
  getUsersUserIdContactsContactIdPhotoValueRoute,
  getUsersUserIdContactsContactIdRoute,
  getUsersUserIdContactsContactIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdContactsRoute,
  patchUsersUserIdContactsContactIdExtensionsExtensionIdRoute,
  patchUsersUserIdContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdContactsContactIdPhotoRoute,
  patchUsersUserIdContactsContactIdRoute,
  patchUsersUserIdContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  postUsersUserIdContactsContactIdExtensionsRoute,
  postUsersUserIdContactsContactIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdContactsContactIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdContactsRoute,
  putUsersUserIdContactsContactIdPhotoValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersContactHandler = app
  .openapi(getUsersUserIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdContactsContactIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdContactsContactIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdContactsContactIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdContactsContactIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdContactsContactIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdContactsContactIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdContactsContactIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdContactsContactIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
