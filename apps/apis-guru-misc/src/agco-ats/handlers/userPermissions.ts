import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2RolesIdUsersRoute,
  getApiV2UsersCurrentPermissionsRoute,
  getApiV2UsersCurrentRolesRoute,
  getApiV2UsersIdPermissionsRoute,
  getApiV2UsersIdRolesRoute,
  putApiV2RolesIdUsersRoute,
  putApiV2UsersIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userPermissionsHandler = app
  .openapi(getApiV2RolesIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RolesIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersCurrentPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersCurrentRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
