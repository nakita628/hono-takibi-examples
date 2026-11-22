import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryRolesDirectoryRoleIdScopedMembersScopedRoleMembershipIdRoute,
  getDirectoryRolesDirectoryRoleIdScopedMembersRoute,
  getDirectoryRolesDirectoryRoleIdScopedMembersScopedRoleMembershipIdRoute,
  patchDirectoryRolesDirectoryRoleIdScopedMembersScopedRoleMembershipIdRoute,
  postDirectoryRolesDirectoryRoleIdScopedMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRolesScopedRoleMembershipHandler = app
  .openapi(getDirectoryRolesDirectoryRoleIdScopedMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdScopedMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRolesDirectoryRoleIdScopedMembersScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdScopedMembersScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryRolesDirectoryRoleIdScopedMembersScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
