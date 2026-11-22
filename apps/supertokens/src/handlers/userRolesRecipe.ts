import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdRecipePermissionRolesRoute,
  getAppidAppIdRecipeRolePermissionsRoute,
  getAppidAppIdRecipeRolesRoute,
  getAppidAppIdTenantIdRecipeRoleUsersRoute,
  getAppidAppIdTenantIdRecipeUserRolesRoute,
  postAppidAppIdRecipeRolePermissionsRemoveRoute,
  postAppidAppIdRecipeRoleRemoveRoute,
  postAppidAppIdTenantIdRecipeUserRoleRemoveRoute,
  putAppidAppIdRecipeRoleRoute,
  putAppidAppIdTenantIdRecipeUserRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userRolesRecipeHandler = app
  .openapi(putAppidAppIdTenantIdRecipeUserRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserRoleRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeRoleUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeRolePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeRolePermissionsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipePermissionRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeRoleRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
