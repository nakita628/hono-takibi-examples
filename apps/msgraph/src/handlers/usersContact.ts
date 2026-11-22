import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdContactsContactIdExtensionsExtensionIdRoute,
  deleteUsersUserIdContactsContactIdPhotoValueRoute,
  deleteUsersUserIdContactsContactIdRoute,
  getUsersUserIdContactsContactIdExtensionsCountRoute,
  getUsersUserIdContactsContactIdExtensionsExtensionIdRoute,
  getUsersUserIdContactsContactIdExtensionsRoute,
  getUsersUserIdContactsContactIdPhotoRoute,
  getUsersUserIdContactsContactIdPhotoValueRoute,
  getUsersUserIdContactsContactIdRoute,
  getUsersUserIdContactsCountRoute,
  getUsersUserIdContactsDeltaRoute,
  getUsersUserIdContactsRoute,
  patchUsersUserIdContactsContactIdExtensionsExtensionIdRoute,
  patchUsersUserIdContactsContactIdPhotoRoute,
  patchUsersUserIdContactsContactIdRoute,
  postUsersUserIdContactsContactIdExtensionsRoute,
  postUsersUserIdContactsContactIdPermanentDeleteRoute,
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
  .openapi(getUsersUserIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdContactsContactIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdContactsContactIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(deleteUsersUserIdContactsContactIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
