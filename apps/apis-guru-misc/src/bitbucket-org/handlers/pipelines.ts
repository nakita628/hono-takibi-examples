import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  deleteTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
  deleteUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute,
  deleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute,
  getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRoute,
  getTeamsUsernamePipelinesConfigVariablesIndexRoute,
  getTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
  getUsersSelectedUserPipelinesConfigVariablesIndexRoute,
  getUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute,
  getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonRoute,
  getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRoute,
  getWorkspacesWorkspacePipelinesConfigVariablesRoute,
  getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute,
  postRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesIndexRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineRoute,
  postTeamsUsernamePipelinesConfigVariablesIndexRoute,
  postUsersSelectedUserPipelinesConfigVariablesIndexRoute,
  postWorkspacesWorkspacePipelinesConfigVariablesRoute,
  putRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  putTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
  putUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute,
  putWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pipelinesHandler = app
  .openapi(
    getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsUsernamePipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsUsernamePipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserPipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSelectedUserPipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute, (c) => {
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
  .openapi(getWorkspacesWorkspacePipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspacePipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
