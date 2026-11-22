import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdRoute,
  deleteMeEmployeeExperienceAssignedRolesEngagementRoleIdRoute,
  deleteMeEmployeeExperienceRoute,
  getMeEmployeeExperienceAssignedRolesCountRoute,
  getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersCountRoute,
  getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdRoute,
  getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdUserMailboxSettingsRoute,
  getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdUserRoute,
  getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdUserServiceProvisioningErrorsCountRoute,
  getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdUserServiceProvisioningErrorsRoute,
  getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersRoute,
  getMeEmployeeExperienceAssignedRolesEngagementRoleIdRoute,
  getMeEmployeeExperienceAssignedRolesRoute,
  getMeEmployeeExperienceLearningCourseActivitiesCountRoute,
  getMeEmployeeExperienceLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
  getMeEmployeeExperienceLearningCourseActivitiesLearningCourseActivityIdRoute,
  getMeEmployeeExperienceLearningCourseActivitiesRoute,
  getMeEmployeeExperienceRoute,
  patchMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdRoute,
  patchMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdUserMailboxSettingsRoute,
  patchMeEmployeeExperienceAssignedRolesEngagementRoleIdRoute,
  patchMeEmployeeExperienceRoute,
  postMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersRoute,
  postMeEmployeeExperienceAssignedRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meEmployeeExperienceUserHandler = app
  .openapi(getMeEmployeeExperienceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeEmployeeExperienceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEmployeeExperienceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEmployeeExperienceAssignedRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEmployeeExperienceAssignedRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEmployeeExperienceAssignedRolesEngagementRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeEmployeeExperienceAssignedRolesEngagementRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEmployeeExperienceAssignedRolesEngagementRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersEngagementRoleMemberIdUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeEmployeeExperienceAssignedRolesEngagementRoleIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEmployeeExperienceAssignedRolesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEmployeeExperienceLearningCourseActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEmployeeExperienceLearningCourseActivitiesLearningCourseActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeEmployeeExperienceLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeEmployeeExperienceLearningCourseActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
