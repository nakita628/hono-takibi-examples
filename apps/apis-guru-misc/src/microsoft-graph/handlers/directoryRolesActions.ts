import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDirectoryRolesDirectoryRoleIdMicrosoftGraphCheckMemberGroupsRoute,
  postDirectoryRolesDirectoryRoleIdMicrosoftGraphCheckMemberObjectsRoute,
  postDirectoryRolesDirectoryRoleIdMicrosoftGraphGetMemberGroupsRoute,
  postDirectoryRolesDirectoryRoleIdMicrosoftGraphGetMemberObjectsRoute,
  postDirectoryRolesDirectoryRoleIdMicrosoftGraphRestoreRoute,
  postDirectoryRolesMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postDirectoryRolesMicrosoftGraphGetByIdsRoute,
  postDirectoryRolesMicrosoftGraphValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRolesActionsHandler = app
  .openapi(postDirectoryRolesMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
