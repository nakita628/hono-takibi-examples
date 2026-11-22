import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PermissionsPermissionGroupIdRoute,
  getV1PermissionsPermissionGroupIdRoute,
  getV1ProductsProductIdPermissionsRoute,
  postV1ProductsProductIdPermissionsRoute,
  putV1PermissionsPermissionGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionGroupsHandler = app
  .openapi(deleteV1PermissionsPermissionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PermissionsPermissionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PermissionsPermissionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
