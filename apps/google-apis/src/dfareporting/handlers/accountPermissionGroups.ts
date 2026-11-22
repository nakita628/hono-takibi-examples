import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdAccountPermissionGroupsIdRoute,
  getUserprofilesProfileIdAccountPermissionGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountPermissionGroupsHandler = app
  .openapi(getUserprofilesProfileIdAccountPermissionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountPermissionGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
