import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  postApiV2DagsDagIdClearTaskInstancesRoute,
  postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskInstanceHandler = app
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2DagsDagIdClearTaskInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
