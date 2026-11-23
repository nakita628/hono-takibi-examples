import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspacesWorkspaceHooksUidRoute,
  deleteWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidRoute,
  deleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute,
  deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute,
  deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRoute,
  deleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugRoute,
  deleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdRoute,
  deleteWorkspacesWorkspaceProjectsProjectKeyRoute,
  getWorkspacesWorkspaceHooksRoute,
  getWorkspacesWorkspaceHooksUidRoute,
  getWorkspacesWorkspaceMembersMemberRoute,
  getWorkspacesWorkspaceMembersRoute,
  getWorkspacesWorkspacePermissionsRepositoriesRepoSlugRoute,
  getWorkspacesWorkspacePermissionsRepositoriesRoute,
  getWorkspacesWorkspacePermissionsRoute,
  getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonRoute,
  getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRoute,
  getWorkspacesWorkspacePipelinesConfigRunnersRoute,
  getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidRoute,
  getWorkspacesWorkspacePipelinesConfigVariablesRoute,
  getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute,
  getWorkspacesWorkspaceProjectsProjectKeyBranchingModelRoute,
  getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRoute,
  getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRoute,
  getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute,
  getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRoute,
  getWorkspacesWorkspaceProjectsProjectKeyDeployKeysRoute,
  getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugRoute,
  getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsRoute,
  getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersRoute,
  getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdRoute,
  getWorkspacesWorkspaceProjectsProjectKeyRoute,
  getWorkspacesWorkspaceProjectsRoute,
  getWorkspacesWorkspacePullrequestsSelectedUserRoute,
  getWorkspacesWorkspaceRoute,
  getWorkspacesWorkspaceSearchCodeRoute,
  getWorkspacesWorkspaceSettingsGpgPublicKeyRoute,
  postWorkspacesWorkspaceCodesearchRoute,
  postWorkspacesWorkspaceHooksRoute,
  postWorkspacesWorkspacePipelinesConfigRunnersRoute,
  postWorkspacesWorkspacePipelinesConfigVariablesRoute,
  postWorkspacesWorkspaceProjectsProjectKeyDeployKeysRoute,
  postWorkspacesWorkspaceProjectsRoute,
  putWorkspacesWorkspaceHooksUidRoute,
  putWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidRoute,
  putWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute,
  putWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRoute,
  putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute,
  putWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugRoute,
  putWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdRoute,
  putWorkspacesWorkspaceProjectsProjectKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getWorkspacesWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceCodesearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceMembersMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePermissionsRepositoriesRepoSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePipelinesConfigRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspacePipelinesConfigRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspacePipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyBranchingModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceProjectsProjectKeyDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getWorkspacesWorkspacePullrequestsSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceSearchCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceSettingsGpgPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
