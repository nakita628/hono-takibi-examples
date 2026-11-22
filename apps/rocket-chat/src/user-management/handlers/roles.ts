import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1RolesGetUsersInPublicRolesRoute,
  getApiV1RolesGetUsersInRoleRoute,
  getApiV1RolesListRoute,
  getApiV1RolesSyncRoute,
  postApiV1RolesAddUserToRoleRoute,
  postApiV1RolesCreateRoute,
  postApiV1RolesDeleteRoute,
  postApiV1RolesRemoveUserFromRoleRoute,
  postApiV1RolesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(postApiV1RolesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RolesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RolesAddUserToRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RolesGetUsersInRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RolesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RolesSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RolesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RolesRemoveUserFromRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RolesGetUsersInPublicRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
