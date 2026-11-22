import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdExtensionsExtensionIdRoute,
  getUsersUserIdExtensionsCountRoute,
  getUsersUserIdExtensionsExtensionIdRoute,
  getUsersUserIdExtensionsRoute,
  patchUsersUserIdExtensionsExtensionIdRoute,
  postUsersUserIdExtensionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersExtensionHandler = app
  .openapi(getUsersUserIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
