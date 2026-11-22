import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployeeExperienceCommunitiesCommunityIdRoute,
  getEmployeeExperienceCommunitiesCommunityIdGroupRoute,
  getEmployeeExperienceCommunitiesCommunityIdGroupServiceProvisioningErrorsCountRoute,
  getEmployeeExperienceCommunitiesCommunityIdGroupServiceProvisioningErrorsRoute,
  getEmployeeExperienceCommunitiesCommunityIdOwnersCountRoute,
  getEmployeeExperienceCommunitiesCommunityIdOwnersRoute,
  getEmployeeExperienceCommunitiesCommunityIdOwnersUserIdMailboxSettingsRoute,
  getEmployeeExperienceCommunitiesCommunityIdOwnersUserIdRoute,
  getEmployeeExperienceCommunitiesCommunityIdOwnersUserIdServiceProvisioningErrorsCountRoute,
  getEmployeeExperienceCommunitiesCommunityIdOwnersUserIdServiceProvisioningErrorsRoute,
  getEmployeeExperienceCommunitiesCommunityIdOwnersUserPrincipalNameUserPrincipalNameRoute,
  getEmployeeExperienceCommunitiesCommunityIdRoute,
  getEmployeeExperienceCommunitiesRoute,
  patchEmployeeExperienceCommunitiesCommunityIdOwnersUserIdMailboxSettingsRoute,
  patchEmployeeExperienceCommunitiesCommunityIdRoute,
  postEmployeeExperienceCommunitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeExperienceCommunityHandler = app
  .openapi(getEmployeeExperienceCommunitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeeExperienceCommunitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceCommunitiesCommunityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployeeExperienceCommunitiesCommunityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployeeExperienceCommunitiesCommunityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceCommunitiesCommunityIdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceCommunitiesCommunityIdGroupServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEmployeeExperienceCommunitiesCommunityIdGroupServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployeeExperienceCommunitiesCommunityIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceCommunitiesCommunityIdOwnersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceCommunitiesCommunityIdOwnersUserIdMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployeeExperienceCommunitiesCommunityIdOwnersUserIdMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEmployeeExperienceCommunitiesCommunityIdOwnersUserIdServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceCommunitiesCommunityIdOwnersUserIdServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceCommunitiesCommunityIdOwnersUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployeeExperienceCommunitiesCommunityIdOwnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
