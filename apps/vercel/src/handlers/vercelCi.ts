import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRunsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptLogsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsRoute,
  getV1VercelCiInvocationsInvocationIdTreeRoute,
  getV1VercelCiLogSearchRoute,
  getV1VercelCiRepositorySettingsRoute,
  getV1VercelCiTaskAnalysesAnalysisIdRoute,
  getV1VercelCiTaskAnalysesAnalysisIdTasksRoute,
  getV2VercelCiBranchesRoute,
  getV2VercelCiInvocationsRoute,
  patchV1VercelCiRepositorySettingsRoute,
  postV1VercelCiInvocationsInvocationIdAttemptsAttemptRetryRoute,
  postV1VercelCiTaskAnalysesAnalysisIdPullRequestRoute,
  postV1VercelCiTaskAnalysesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vercelCiHandler = app
  .openapi(getV1VercelCiRepositorySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1VercelCiRepositorySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VercelCiInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VercelCiBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VercelCiTaskAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiTaskAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VercelCiTaskAnalysesAnalysisIdPullRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiTaskAnalysesAnalysisIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiInvocationsInvocationIdAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiInvocationsInvocationIdTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiInvocationsInvocationIdAttemptsAttemptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VercelCiInvocationsInvocationIdAttemptsAttemptRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRunsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1VercelCiInvocationsInvocationIdAttemptsAttemptLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiLogSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
