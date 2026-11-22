import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  deleteTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
  deleteUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute,
  deleteWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidRoute,
  deleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute,
  getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesRoute,
  getTeamsUsernamePipelinesConfigVariablesRoute,
  getTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
  getUsersSelectedUserPipelinesConfigVariablesRoute,
  getUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute,
  getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonRoute,
  getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRoute,
  getWorkspacesWorkspacePipelinesConfigRunnersRoute,
  getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidRoute,
  getWorkspacesWorkspacePipelinesConfigVariablesRoute,
  getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidRoute,
  postRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesRoute,
  postTeamsUsernamePipelinesConfigVariablesRoute,
  postUsersSelectedUserPipelinesConfigVariablesRoute,
  postWorkspacesWorkspacePipelinesConfigRunnersRoute,
  postWorkspacesWorkspacePipelinesConfigVariablesRoute,
  putRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  putTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
  putUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute,
  putWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidRoute,
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
    putRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
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
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsRoute, (c) => {
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
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsUsernamePipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsUsernamePipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserPipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSelectedUserPipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute, (c) => {
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
