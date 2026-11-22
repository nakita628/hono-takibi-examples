import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsDeleteRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowArtifactsArtifactsModelVersionFilePathRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowArtifactsArtifactsRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowExperimentsGetByNameRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowExperimentsGetRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowExperimentsListRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowMetricsGetHistoryRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsGetDownloadUriRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsGetRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsAliasRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsGetRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsSearchRoute,
  getApiV4ProjectsIdMlMlflowApi20MlflowRunsGetRoute,
  patchApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsUpdateRoute,
  patchApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsUpdateRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsCreateRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsDeleteRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsSearchRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsSetExperimentTagRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsCreateRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsCreateRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsGetLatestVersionsRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowRunsCreateRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowRunsDeleteRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowRunsLogBatchRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowRunsLogMetricRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowRunsLogParameterRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowRunsSearchRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowRunsSetTagRoute,
  postApiV4ProjectsIdMlMlflowApi20MlflowRunsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mlOpsHandler = app
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowArtifactsArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsIdMlMlflowApi20MlflowArtifactsArtifactsModelVersionFilePathRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsGetLatestVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowRunsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowRunsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowRunsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowRunsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowRunsLogMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowRunsLogParameterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowRunsSetTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowRunsLogBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowRunsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsGetDownloadUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowMetricsGetHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowExperimentsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowExperimentsGetByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMlMlflowApi20MlflowExperimentsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsSetExperimentTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
