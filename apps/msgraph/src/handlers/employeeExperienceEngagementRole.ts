import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdRoute,
  getEmployeeExperienceRolesEngagementRoleIdMembersCountRoute,
  getEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdRoute,
  getEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdUserMailboxSettingsRoute,
  getEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdUserRoute,
  getEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdUserServiceProvisioningErrorsCountRoute,
  getEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdUserServiceProvisioningErrorsRoute,
  getEmployeeExperienceRolesEngagementRoleIdMembersRoute,
  getEmployeeExperienceRolesEngagementRoleIdRoute,
  getEmployeeExperienceRolesRoute,
  patchEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdUserMailboxSettingsRoute,
  postEmployeeExperienceRolesEngagementRoleIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeExperienceEngagementRoleHandler = app
  .openapi(getEmployeeExperienceRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceRolesEngagementRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceRolesEngagementRoleIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeeExperienceRolesEngagementRoleIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceRolesEngagementRoleIdMembersEngagementRoleMemberIdUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployeeExperienceRolesEngagementRoleIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
