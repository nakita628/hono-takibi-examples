import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirectoryRolesCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphApplicationCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphDeviceCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphGroupCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphOrgContactCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphServicePrincipalCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphUserCountRoute,
  getDirectoryRolesDirectoryRoleIdScopedMembersCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRolesHandler = app
  .openapi(getDirectoryRolesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdScopedMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
