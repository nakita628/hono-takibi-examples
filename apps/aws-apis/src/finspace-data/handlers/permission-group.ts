import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePermissionGroupPermissionGroupIdRoute,
  deletePermissionGroupPermissionGroupIdUsersUserIdRoute,
  getPermissionGroupPermissionGroupIdRoute,
  getPermissionGroupPermissionGroupIdUsersMaxResultsRoute,
  postPermissionGroupPermissionGroupIdUsersUserIdRoute,
  postPermissionGroupRoute,
  putPermissionGroupPermissionGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionGroupHandler = app
  .openapi(postPermissionGroupPermissionGroupIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePermissionGroupPermissionGroupIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePermissionGroupPermissionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionGroupPermissionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPermissionGroupPermissionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionGroupPermissionGroupIdUsersMaxResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
