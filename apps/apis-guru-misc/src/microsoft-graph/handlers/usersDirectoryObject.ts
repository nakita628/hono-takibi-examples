import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdManagerRefRoute,
  getUsersUserIdCreatedObjectsDirectoryObjectIdRoute,
  getUsersUserIdCreatedObjectsRoute,
  getUsersUserIdDirectReportsDirectoryObjectIdRoute,
  getUsersUserIdDirectReportsRoute,
  getUsersUserIdManagerRefRoute,
  getUsersUserIdManagerRoute,
  getUsersUserIdMemberOfDirectoryObjectIdRoute,
  getUsersUserIdMemberOfRoute,
  getUsersUserIdOwnedDevicesDirectoryObjectIdRoute,
  getUsersUserIdOwnedDevicesRoute,
  getUsersUserIdOwnedObjectsDirectoryObjectIdRoute,
  getUsersUserIdOwnedObjectsRoute,
  getUsersUserIdRegisteredDevicesDirectoryObjectIdRoute,
  getUsersUserIdRegisteredDevicesRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdRoute,
  getUsersUserIdTransitiveMemberOfRoute,
  putUsersUserIdManagerRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersDirectoryObjectHandler = app
  .openapi(getUsersUserIdCreatedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCreatedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
