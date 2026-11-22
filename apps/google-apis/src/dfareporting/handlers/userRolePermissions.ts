import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdUserRolePermissionsIdRoute,
  getUserprofilesProfileIdUserRolePermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userRolePermissionsHandler = app
  .openapi(getUserprofilesProfileIdUserRolePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdUserRolePermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
