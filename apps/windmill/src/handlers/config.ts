import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConfigsUpdateNameRoute,
  getConfigsAutoscalingDiagnosticsWorkerGroupRoute,
  getConfigsGetNameRoute,
  getConfigsListAllDedicatedWithDepsRoute,
  getConfigsListAllWorkspaceDependenciesRoute,
  getConfigsListAutoscalingEventsWorkerGroupRoute,
  getConfigsListAvailablePythonVersionsRoute,
  getConfigsListRoute,
  getConfigsListWorkerGroupsRoute,
  getConfigsNativeKubernetesAutoscalingHealthcheckRoute,
  postConfigsAutoscalingRecordingWorkerGroupRoute,
  postConfigsTestAutoscalingWorkerGroupRoute,
  postConfigsUpdateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getConfigsListWorkerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigsGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigsUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConfigsUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigsListAutoscalingEventsWorkerGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigsAutoscalingDiagnosticsWorkerGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigsAutoscalingRecordingWorkerGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigsTestAutoscalingWorkerGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigsNativeKubernetesAutoscalingHealthcheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigsListAvailablePythonVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigsListAllWorkspaceDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigsListAllDedicatedWithDepsRoute, (c) => {
    throw new Error('Not implemented')
  })
