import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getUsersUserIdPermissionGrantsCountRoute,
  getUsersUserIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getUsersUserIdPermissionGrantsRoute,
  patchUsersUserIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  postUsersUserIdPermissionGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersResourceSpecificPermissionGrantHandler = app
  .openapi(getUsersUserIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
