import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserActionsRunnersRunnerIdRoute,
  deleteUserActionsSecretsSecretnameRoute,
  deleteUserActionsVariablesVariablenameRoute,
  deleteUserApplicationsOauth2IdRoute,
  deleteUserAvatarRoute,
  deleteUserBlocksUsernameRoute,
  deleteUserEmailsRoute,
  deleteUserFollowingUsernameRoute,
  deleteUserGpgKeysIdRoute,
  deleteUserHooksIdRoute,
  deleteUserKeysIdRoute,
  deleteUserProjectsIdColumnsColumnIdIssuesIssueIdRoute,
  deleteUserProjectsIdColumnsColumnIdRoute,
  deleteUserProjectsIdRoute,
  deleteUserProjectsIdWorkflowsWorkflowIdRoute,
  deleteUserStarredOwnerRepoRoute,
  getUserActionsJobsRoute,
  getUserActionsRunnersRoute,
  getUserActionsRunnersRunnerIdRoute,
  getUserActionsRunsRoute,
  getUserActionsVariablesRoute,
  getUserActionsVariablesVariablenameRoute,
  getUserApplicationsOauth2IdRoute,
  getUserApplicationsOauth2Route,
  getUserBlocksRoute,
  getUserBlocksUsernameRoute,
  getUserEmailsRoute,
  getUserFollowersRoute,
  getUserFollowingRoute,
  getUserFollowingUsernameRoute,
  getUserGpgKeysIdRoute,
  getUserGpgKeysRoute,
  getUserGpgKeyTokenRoute,
  getUserHooksIdRoute,
  getUserHooksRoute,
  getUserKeysIdRoute,
  getUserKeysRoute,
  getUserOrgsRoute,
  getUserProjectsIdColumnsColumnIdIssuesRoute,
  getUserProjectsIdColumnsColumnIdRoute,
  getUserProjectsIdColumnsRoute,
  getUserProjectsIdRoute,
  getUserProjectsIdWorkflowsRoute,
  getUserProjectsIdWorkflowsWorkflowIdRoute,
  getUserProjectsRoute,
  getUserReposRoute,
  getUserRoute,
  getUserSettingsRoute,
  getUserStarredOwnerRepoRoute,
  getUserStarredRoute,
  getUserStopwatchesRoute,
  getUserSubscriptionsRoute,
  getUserTeamsRoute,
  getUserTimesRoute,
  patchUserActionsRunnersRunnerIdRoute,
  patchUserApplicationsOauth2IdRoute,
  patchUserHooksIdRoute,
  patchUserProjectsIdColumnsColumnIdRoute,
  patchUserProjectsIdRoute,
  patchUserProjectsIdWorkflowsWorkflowIdRoute,
  patchUserSettingsRoute,
  postUserActionsRunnersRegistrationTokenRoute,
  postUserActionsVariablesVariablenameRoute,
  postUserApplicationsOauth2Route,
  postUserAvatarRoute,
  postUserEmailsRoute,
  postUserGpgKeysRoute,
  postUserGpgKeyVerifyRoute,
  postUserHooksRoute,
  postUserKeysRoute,
  postUserProjectsIdColumnsColumnIdDefaultRoute,
  postUserProjectsIdColumnsColumnIdIssuesIssueIdRoute,
  postUserProjectsIdColumnsMoveRoute,
  postUserProjectsIdColumnsRoute,
  postUserProjectsIdIssuesIssueIdMoveRoute,
  postUserProjectsIdWorkflowsRoute,
  postUserProjectsRoute,
  postUserReposRoute,
  putUserActionsSecretsSecretnameRoute,
  putUserActionsVariablesVariablenameRoute,
  putUserBlocksUsernameRoute,
  putUserFollowingUsernameRoute,
  putUserStarredOwnerRepoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserActionsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserActionsRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserActionsRunnersRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserActionsRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserActionsSecretsSecretnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserActionsSecretsSecretnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserApplicationsOauth2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserApplicationsOauth2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserApplicationsOauth2IdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserApplicationsOauth2IdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserApplicationsOauth2IdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowingUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowingUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowingUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGpgKeyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGpgKeyVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserGpgKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGpgKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserProjectsIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserProjectsIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserProjectsIdColumnsMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserProjectsIdColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserProjectsIdColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserProjectsIdColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserProjectsIdColumnsColumnIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserProjectsIdColumnsColumnIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserProjectsIdColumnsColumnIdIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserProjectsIdColumnsColumnIdIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserProjectsIdIssuesIssueIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserProjectsIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserProjectsIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserProjectsIdWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserProjectsIdWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserProjectsIdWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserStarredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserStarredOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserStarredOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserStarredOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserStopwatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
