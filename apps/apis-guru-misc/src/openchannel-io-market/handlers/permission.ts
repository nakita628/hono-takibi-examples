import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePermissionAppsAppIdRoute,
  getPermissionAppsAppIdRoute,
  postPermissionAppsAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionHandler = app
  .openapi(deletePermissionAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
