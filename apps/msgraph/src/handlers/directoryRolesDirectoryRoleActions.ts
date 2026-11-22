import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDirectoryRolesDirectoryRoleIdCheckMemberGroupsRoute,
  postDirectoryRolesDirectoryRoleIdCheckMemberObjectsRoute,
  postDirectoryRolesDirectoryRoleIdGetMemberGroupsRoute,
  postDirectoryRolesDirectoryRoleIdGetMemberObjectsRoute,
  postDirectoryRolesDirectoryRoleIdRestoreRoute,
  postDirectoryRolesGetAvailableExtensionPropertiesRoute,
  postDirectoryRolesGetByIdsRoute,
  postDirectoryRolesValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRolesDirectoryRoleActionsHandler = app
  .openapi(postDirectoryRolesDirectoryRoleIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
