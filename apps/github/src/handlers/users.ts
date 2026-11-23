import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUsernameAttestationsAttestationIdRoute,
  deleteUsersUsernameAttestationsDigestSubjectDigestRoute,
  deleteUsersUsernameCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRoute,
  deleteUsersUsernameCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute,
  deleteUsersUsernameCopilotSpacesSpaceNumberRoute,
  deleteUsersUsernamePackagesPackageTypePackageNameRoute,
  deleteUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  deleteUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute,
  getUsersRoute,
  getUsersUsernameAttestationsSubjectDigestRoute,
  getUsersUsernameCopilotSpacesRoute,
  getUsersUsernameCopilotSpacesSpaceNumberCollaboratorsRoute,
  getUsersUsernameCopilotSpacesSpaceNumberResourcesRoute,
  getUsersUsernameCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute,
  getUsersUsernameCopilotSpacesSpaceNumberRoute,
  getUsersUsernameDockerConflictsRoute,
  getUsersUsernameEventsOrgsOrgRoute,
  getUsersUsernameEventsPublicRoute,
  getUsersUsernameEventsRoute,
  getUsersUsernameFollowersRoute,
  getUsersUsernameFollowingRoute,
  getUsersUsernameFollowingTargetUserRoute,
  getUsersUsernameGistsRoute,
  getUsersUsernameGpgKeysRoute,
  getUsersUsernameHovercardRoute,
  getUsersUsernameInstallationRoute,
  getUsersUsernameKeysRoute,
  getUsersUsernameOrgsRoute,
  getUsersUsernamePackagesPackageTypePackageNameRoute,
  getUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  getUsersUsernamePackagesPackageTypePackageNameVersionsRoute,
  getUsersUsernamePackagesRoute,
  getUsersUsernameProjectsV2ProjectNumberFieldsFieldIdRoute,
  getUsersUsernameProjectsV2ProjectNumberFieldsRoute,
  getUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute,
  getUsersUsernameProjectsV2ProjectNumberItemsRoute,
  getUsersUsernameProjectsV2ProjectNumberRoute,
  getUsersUsernameProjectsV2ProjectNumberViewsViewNumberItemsRoute,
  getUsersUsernameProjectsV2Route,
  getUsersUsernameReceivedEventsPublicRoute,
  getUsersUsernameReceivedEventsRoute,
  getUsersUsernameReposRoute,
  getUsersUsernameRoute,
  getUsersUsernameSettingsBillingAiCreditUsageRoute,
  getUsersUsernameSettingsBillingPremiumRequestUsageRoute,
  getUsersUsernameSettingsBillingUsageRoute,
  getUsersUsernameSettingsBillingUsageSummaryRoute,
  getUsersUsernameSocialAccountsRoute,
  getUsersUsernameSshSigningKeysRoute,
  getUsersUsernameStarredRoute,
  getUsersUsernameSubscriptionsRoute,
  patchUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute,
  postUsersUserIdProjectsV2ProjectNumberViewsRoute,
  postUsersUsernameAttestationsBulkListRoute,
  postUsersUsernameAttestationsDeleteRequestRoute,
  postUsersUsernameCopilotSpacesRoute,
  postUsersUsernameCopilotSpacesSpaceNumberCollaboratorsRoute,
  postUsersUsernameCopilotSpacesSpaceNumberResourcesRoute,
  postUsersUsernamePackagesPackageTypePackageNameRestoreRoute,
  postUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute,
  postUsersUsernameProjectsV2ProjectNumberFieldsRoute,
  postUsersUsernameProjectsV2ProjectNumberItemsRoute,
  putUsersUsernameCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRoute,
  putUsersUsernameCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute,
  putUsersUsernameCopilotSpacesSpaceNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdProjectsV2ProjectNumberViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameAttestationsBulkListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameAttestationsDeleteRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameAttestationsDigestSubjectDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameAttestationsAttestationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameAttestationsSubjectDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameCopilotSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameCopilotSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameCopilotSpacesSpaceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUsernameCopilotSpacesSpaceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameCopilotSpacesSpaceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameCopilotSpacesSpaceNumberCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameCopilotSpacesSpaceNumberCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putUsersUsernameCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUsernameCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUsernameCopilotSpacesSpaceNumberResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameCopilotSpacesSpaceNumberResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUsernameCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameDockerConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameEventsOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameEventsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFollowingTargetUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameGistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameHovercardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernamePackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernamePackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernamePackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernamePackagesPackageTypePackageNameRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernamePackagesPackageTypePackageNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUsernameProjectsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameProjectsV2ProjectNumberFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameProjectsV2ProjectNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberViewsViewNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameReceivedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameReceivedEventsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSettingsBillingAiCreditUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSettingsBillingPremiumRequestUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSettingsBillingUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSettingsBillingUsageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSocialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSshSigningKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameStarredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
