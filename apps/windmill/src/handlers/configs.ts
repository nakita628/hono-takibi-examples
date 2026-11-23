import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getConfigsListWorkerGroupsRouteHandler: RouteHandler<
  typeof getConfigsListWorkerGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigsGetNameRouteHandler: RouteHandler<typeof getConfigsGetNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postConfigsUpdateNameRouteHandler: RouteHandler<
  typeof postConfigsUpdateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConfigsUpdateNameRouteHandler: RouteHandler<
  typeof deleteConfigsUpdateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigsListRouteHandler: RouteHandler<typeof getConfigsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigsListAutoscalingEventsWorkerGroupRouteHandler: RouteHandler<
  typeof getConfigsListAutoscalingEventsWorkerGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigsAutoscalingDiagnosticsWorkerGroupRouteHandler: RouteHandler<
  typeof getConfigsAutoscalingDiagnosticsWorkerGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConfigsAutoscalingRecordingWorkerGroupRouteHandler: RouteHandler<
  typeof postConfigsAutoscalingRecordingWorkerGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConfigsTestAutoscalingWorkerGroupRouteHandler: RouteHandler<
  typeof postConfigsTestAutoscalingWorkerGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigsNativeKubernetesAutoscalingHealthcheckRouteHandler: RouteHandler<
  typeof getConfigsNativeKubernetesAutoscalingHealthcheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigsListAvailablePythonVersionsRouteHandler: RouteHandler<
  typeof getConfigsListAvailablePythonVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigsListAllWorkspaceDependenciesRouteHandler: RouteHandler<
  typeof getConfigsListAllWorkspaceDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigsListAllDedicatedWithDepsRouteHandler: RouteHandler<
  typeof getConfigsListAllDedicatedWithDepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
