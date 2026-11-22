import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePermissionPermissionIdRoute,
  getPermissionPermissionIdRoute,
  getPermissionsRoute,
  getUserUserIdPermissionsRoute,
  patchPermissionPermissionIdRoute,
  postPermissionsRoute,
  putPermissionPermissionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionHandler = app
  .openapi(deletePermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
