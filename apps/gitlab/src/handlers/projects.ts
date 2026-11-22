import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdForkRoute,
  deleteApiV4ProjectsIdIssuesIssueIidRoute,
  deleteApiV4ProjectsIdPackagesProtectionRulesPackageProtectionRuleIdRoute,
  deleteApiV4ProjectsIdRegistryProtectionRepositoryRulesProtectionRuleIdRoute,
  deleteApiV4ProjectsIdRegistryProtectionTagRulesProtectionRuleIdRoute,
  deleteApiV4ProjectsIdRoute,
  deleteApiV4ProjectsIdShareGroupIdRoute,
  deleteApiV4ProjectsIdTerraformStateProtectionRulesTerraformStateProtectionRuleIdRoute,
  deleteApiV4ProjectsIdUploadsSecretFilenameRoute,
  deleteApiV4ProjectsIdUploadsUploadIdRoute,
  getApiV4ProjectsIdAiAgentSessionsRoute,
  getApiV4ProjectsIdAuditEventsAuditEventIdRoute,
  getApiV4ProjectsIdAuditEventsRoute,
  getApiV4ProjectsIdForksRoute,
  getApiV4ProjectsIdGroupsRoute,
  getApiV4ProjectsIdInvitedGroupsRoute,
  getApiV4ProjectsIdIssuesIssueIidClosedByRoute,
  getApiV4ProjectsIdIssuesIssueIidRoute,
  getApiV4ProjectsIdIssuesRoute,
  getApiV4ProjectsIdIssuesStatisticsRoute,
  getApiV4ProjectsIdLanguagesRoute,
  getApiV4ProjectsIdPackagesProtectionRulesRoute,
  getApiV4ProjectsIdPagesAccessRoute,
  getApiV4ProjectsIdRegistryProtectionRepositoryRulesRoute,
  getApiV4ProjectsIdRegistryProtectionTagRulesRoute,
  getApiV4ProjectsIdRoute,
  getApiV4ProjectsIdSecuritySettingsRoute,
  getApiV4ProjectsIdShareLocationsRoute,
  getApiV4ProjectsIdStarrersRoute,
  getApiV4ProjectsIdStatisticsRoute,
  getApiV4ProjectsIdStorageRoute,
  getApiV4ProjectsIdTerraformStateProtectionRulesRoute,
  getApiV4ProjectsIdTransferLocationsRoute,
  getApiV4ProjectsIdUploadsRoute,
  getApiV4ProjectsIdUploadsSecretFilenameRoute,
  getApiV4ProjectsIdUploadsUploadIdRoute,
  getApiV4ProjectsIdUsersRoute,
  getApiV4ProjectsRoute,
  getApiV4UsersUserIdContributedProjectsRoute,
  getApiV4UsersUserIdProjectsRoute,
  getApiV4UsersUserIdStarredProjectsRoute,
  patchApiV4ProjectsIdAiAgentSessionsSessionIdRoute,
  patchApiV4ProjectsIdPackagesProtectionRulesPackageProtectionRuleIdRoute,
  patchApiV4ProjectsIdRegistryProtectionRepositoryRulesProtectionRuleIdRoute,
  patchApiV4ProjectsIdRegistryProtectionTagRulesProtectionRuleIdRoute,
  patchApiV4ProjectsIdTerraformStateProtectionRulesTerraformStateProtectionRuleIdRoute,
  postApiV4ProjectsIdAiAgentAuditEventsRoute,
  postApiV4ProjectsIdAiAgentIdentitiesRoute,
  postApiV4ProjectsIdAiAgentSessionsRoute,
  postApiV4ProjectsIdArchiveRoute,
  postApiV4ProjectsIdCreateCiConfigRoute,
  postApiV4ProjectsIdForkForkedFromIdRoute,
  postApiV4ProjectsIdForkRoute,
  postApiV4ProjectsIdHousekeepingRoute,
  postApiV4ProjectsIdImportProjectMembersProjectIdRoute,
  postApiV4ProjectsIdIssuesIssueIidCloneRoute,
  postApiV4ProjectsIdIssuesIssueIidMoveRoute,
  postApiV4ProjectsIdIssuesRoute,
  postApiV4ProjectsIdPackagesProtectionRulesRoute,
  postApiV4ProjectsIdRegistryProtectionRepositoryRulesRoute,
  postApiV4ProjectsIdRegistryProtectionTagRulesRoute,
  postApiV4ProjectsIdRepositorySizeRoute,
  postApiV4ProjectsIdRestoreRoute,
  postApiV4ProjectsIdShareRoute,
  postApiV4ProjectsIdStarRoute,
  postApiV4ProjectsIdTerraformStateProtectionRulesRoute,
  postApiV4ProjectsIdUnarchiveRoute,
  postApiV4ProjectsIdUnstarRoute,
  postApiV4ProjectsIdUploadsAuthorizeRoute,
  postApiV4ProjectsIdUploadsRoute,
  postApiV4ProjectsRoute,
  postApiV4ProjectsUserUserIdRoute,
  putApiV4ProjectsIdIssuesIssueIidReorderRoute,
  putApiV4ProjectsIdIssuesIssueIidRoute,
  putApiV4ProjectsIdRoute,
  putApiV4ProjectsIdSecuritySettingsRoute,
  putApiV4ProjectsIdTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postApiV4ProjectsIdAiAgentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdAiAgentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdAiAgentSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdAiAgentIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdAiAgentAuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSecuritySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdSecuritySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdTerraformStateProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdTerraformStateProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchApiV4ProjectsIdTerraformStateProtectionRulesTerraformStateProtectionRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV4ProjectsIdTerraformStateProtectionRulesTerraformStateProtectionRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4UsersUserIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersUserIdContributedProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersUserIdStarredProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdShareLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPagesAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdUnstarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdStarrersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdForkForkedFromIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdShareGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdImportProjectMembersProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdInvitedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdHousekeepingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositorySizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdTransferLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdAuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdAuditEventsAuditEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdPackagesProtectionRulesPackageProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPackagesProtectionRulesPackageProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRegistryProtectionTagRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRegistryProtectionTagRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdRegistryProtectionTagRulesProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRegistryProtectionTagRulesProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRegistryProtectionRepositoryRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRegistryProtectionRepositoryRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdRegistryProtectionRepositoryRulesProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRegistryProtectionRepositoryRulesProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdCreateCiConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdUploadsAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdUploadsSecretFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdUploadsSecretFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIssuesIssueIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdIssuesIssueIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIssuesIssueIidReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidClosedByRoute, (c) => {
    throw new Error('Not implemented')
  })
