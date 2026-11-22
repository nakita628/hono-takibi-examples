import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminTeamsPolicyRoute,
  deleteAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute,
  deleteAdminTeamsRoute,
  deleteAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute,
  deleteAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute,
  deleteAdminTeamsTelephoneNumberManagementRoute,
  deleteAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute,
  getAdminTeamsPolicyMicrosoftGraphTeamsAdministrationGetPolicyIdTypeTypeNameNameRoute,
  getAdminTeamsPolicyRoute,
  getAdminTeamsPolicyUserAssignmentsCountRoute,
  getAdminTeamsPolicyUserAssignmentsRoute,
  getAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute,
  getAdminTeamsRoute,
  getAdminTeamsTelephoneNumberManagementNumberAssignmentsCountRoute,
  getAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute,
  getAdminTeamsTelephoneNumberManagementNumberAssignmentsRoute,
  getAdminTeamsTelephoneNumberManagementOperationsCountRoute,
  getAdminTeamsTelephoneNumberManagementOperationsRoute,
  getAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute,
  getAdminTeamsTelephoneNumberManagementRoute,
  getAdminTeamsUserConfigurationsCountRoute,
  getAdminTeamsUserConfigurationsRoute,
  getAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute,
  getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserMailboxSettingsRoute,
  getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserRoute,
  getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserServiceProvisioningErrorsCountRoute,
  getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserServiceProvisioningErrorsRoute,
  patchAdminTeamsPolicyRoute,
  patchAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute,
  patchAdminTeamsRoute,
  patchAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute,
  patchAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute,
  patchAdminTeamsTelephoneNumberManagementRoute,
  patchAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute,
  patchAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserMailboxSettingsRoute,
  postAdminTeamsPolicyUserAssignmentsMicrosoftGraphTeamsAdministrationAssignRoute,
  postAdminTeamsPolicyUserAssignmentsMicrosoftGraphTeamsAdministrationUnassignRoute,
  postAdminTeamsPolicyUserAssignmentsRoute,
  postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationAssignNumberRoute,
  postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationUnassignNumberRoute,
  postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationUpdateNumberRoute,
  postAdminTeamsTelephoneNumberManagementNumberAssignmentsRoute,
  postAdminTeamsTelephoneNumberManagementOperationsRoute,
  postAdminTeamsUserConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminTeamsAdminRootHandler = app
  .openapi(getAdminTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminTeamsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTeamsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminTeamsPolicyMicrosoftGraphTeamsAdministrationGetPolicyIdTypeTypeNameNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminTeamsPolicyUserAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsPolicyUserAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsPolicyUserAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsPolicyUserAssignmentsMicrosoftGraphTeamsAdministrationAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAdminTeamsPolicyUserAssignmentsMicrosoftGraphTeamsAdministrationUnassignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminTeamsTelephoneNumberManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminTeamsTelephoneNumberManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTeamsTelephoneNumberManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsTelephoneNumberManagementNumberAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsTelephoneNumberManagementNumberAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminTeamsTelephoneNumberManagementNumberAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationAssignNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationUnassignNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationUpdateNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminTeamsTelephoneNumberManagementOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsTelephoneNumberManagementOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminTeamsTelephoneNumberManagementOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsUserConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsUserConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminTeamsUserConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
