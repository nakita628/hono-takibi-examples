import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdUserRolePermissionGroupsIdRoute,
  getUserprofilesProfileIdUserRolePermissionGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userRolePermissionGroupsHandler = app
  .openapi(getUserprofilesProfileIdUserRolePermissionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdUserRolePermissionGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
