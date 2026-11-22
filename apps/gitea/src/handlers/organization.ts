import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgActionsRunnersRunnerIdRoute,
  deleteOrgsOrgActionsSecretsSecretnameRoute,
  deleteOrgsOrgActionsVariablesVariablenameRoute,
  deleteOrgsOrgAvatarRoute,
  deleteOrgsOrgBlocksUsernameRoute,
  deleteOrgsOrgHooksIdRoute,
  deleteOrgsOrgLabelsIdRoute,
  deleteOrgsOrgMembersUsernameRoute,
  deleteOrgsOrgProjectsIdColumnsColumnIdIssuesIssueIdRoute,
  deleteOrgsOrgProjectsIdColumnsColumnIdRoute,
  deleteOrgsOrgProjectsIdRoute,
  deleteOrgsOrgProjectsIdWorkflowsWorkflowIdRoute,
  deleteOrgsOrgPublicMembersUsernameRoute,
  deleteOrgsOrgReposRoute,
  deleteOrgsOrgRoute,
  deleteTeamsIdMembersUsernameRoute,
  deleteTeamsIdReposOrgRepoRoute,
  deleteTeamsIdRoute,
  getOrgsOrgActionsJobsRoute,
  getOrgsOrgActionsRunnersRoute,
  getOrgsOrgActionsRunnersRunnerIdRoute,
  getOrgsOrgActionsRunsRoute,
  getOrgsOrgActionsSecretsRoute,
  getOrgsOrgActionsVariablesRoute,
  getOrgsOrgActionsVariablesVariablenameRoute,
  getOrgsOrgActivitiesFeedsRoute,
  getOrgsOrgBlocksRoute,
  getOrgsOrgBlocksUsernameRoute,
  getOrgsOrgHooksIdRoute,
  getOrgsOrgHooksRoute,
  getOrgsOrgLabelsIdRoute,
  getOrgsOrgLabelsRoute,
  getOrgsOrgMembersRoute,
  getOrgsOrgMembersUsernameRoute,
  getOrgsOrgProjectsIdColumnsColumnIdIssuesRoute,
  getOrgsOrgProjectsIdColumnsColumnIdRoute,
  getOrgsOrgProjectsIdColumnsRoute,
  getOrgsOrgProjectsIdRoute,
  getOrgsOrgProjectsIdWorkflowsRoute,
  getOrgsOrgProjectsIdWorkflowsWorkflowIdRoute,
  getOrgsOrgProjectsRoute,
  getOrgsOrgPublicMembersRoute,
  getOrgsOrgPublicMembersUsernameRoute,
  getOrgsOrgReposRoute,
  getOrgsOrgRoute,
  getOrgsOrgTeamsRoute,
  getOrgsOrgTeamsSearchRoute,
  getOrgsRoute,
  getTeamsIdActivitiesFeedsRoute,
  getTeamsIdMembersRoute,
  getTeamsIdMembersUsernameRoute,
  getTeamsIdReposOrgRepoRoute,
  getTeamsIdReposRoute,
  getTeamsIdRoute,
  getUserOrgsRoute,
  getUsersUsernameOrgsOrgPermissionsRoute,
  getUsersUsernameOrgsRoute,
  patchOrgsOrgActionsRunnersRunnerIdRoute,
  patchOrgsOrgHooksIdRoute,
  patchOrgsOrgLabelsIdRoute,
  patchOrgsOrgProjectsIdColumnsColumnIdRoute,
  patchOrgsOrgProjectsIdRoute,
  patchOrgsOrgProjectsIdWorkflowsWorkflowIdRoute,
  patchOrgsOrgRoute,
  patchTeamsIdRoute,
  postOrgOrgReposRoute,
  postOrgsOrgActionsRunnersRegistrationTokenRoute,
  postOrgsOrgActionsVariablesVariablenameRoute,
  postOrgsOrgAvatarRoute,
  postOrgsOrgHooksRoute,
  postOrgsOrgLabelsRoute,
  postOrgsOrgProjectsIdColumnsColumnIdDefaultRoute,
  postOrgsOrgProjectsIdColumnsColumnIdIssuesIssueIdRoute,
  postOrgsOrgProjectsIdColumnsMoveRoute,
  postOrgsOrgProjectsIdColumnsRoute,
  postOrgsOrgProjectsIdIssuesIssueIdMoveRoute,
  postOrgsOrgProjectsIdWorkflowsRoute,
  postOrgsOrgProjectsRoute,
  postOrgsOrgRenameRoute,
  postOrgsOrgReposRoute,
  postOrgsOrgTeamsRoute,
  postOrgsRoute,
  putOrgsOrgActionsSecretsSecretnameRoute,
  putOrgsOrgActionsVariablesVariablenameRoute,
  putOrgsOrgBlocksUsernameRoute,
  putOrgsOrgPublicMembersUsernameRoute,
  putTeamsIdMembersUsernameRoute,
  putTeamsIdReposOrgRepoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(postOrgOrgReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnersRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsSecretsSecretnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsSecretsSecretnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActivitiesFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsIdColumnsMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgProjectsIdColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsIdColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgProjectsIdColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsIdColumnsColumnIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsIdColumnsColumnIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgProjectsIdColumnsColumnIdIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsIdColumnsColumnIdIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsIdIssuesIssueIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgProjectsIdWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsIdWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgProjectsIdWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPublicMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgPublicMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPublicMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgPublicMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdActivitiesFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsIdMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsIdMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsIdReposOrgRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdReposOrgRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsIdReposOrgRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameOrgsOrgPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
