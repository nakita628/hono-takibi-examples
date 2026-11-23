import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWorkflowsWorkflowIdRoute,
  getWorkflowsMetricsJsonRoute,
  getWorkflowsRoute,
  getWorkflowsTasksRoute,
  getWorkflowsTasksTaskIdRoute,
  getWorkflowsWorkflowIdExportRoute,
  getWorkflowsWorkflowIdRoute,
  patchWorkflowsWorkflowIdRoute,
  postWorkflowsImportRoute,
  postWorkflowsTasksTaskIdRerunRoute,
  postWorkflowsWorkflowIdRunRoute,
  putWorkflowsTasksBatchUpdateRoute,
} from '../routes'

export const getWorkflowsRouteHandler: RouteHandler<typeof getWorkflowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkflowsImportRouteHandler: RouteHandler<
  typeof postWorkflowsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowsMetricsJsonRouteHandler: RouteHandler<
  typeof getWorkflowsMetricsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowsTasksRouteHandler: RouteHandler<typeof getWorkflowsTasksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putWorkflowsTasksBatchUpdateRouteHandler: RouteHandler<
  typeof putWorkflowsTasksBatchUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowsTasksTaskIdRouteHandler: RouteHandler<
  typeof getWorkflowsTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkflowsTasksTaskIdRerunRouteHandler: RouteHandler<
  typeof postWorkflowsTasksTaskIdRerunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof deleteWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof getWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof patchWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowsWorkflowIdExportRouteHandler: RouteHandler<
  typeof getWorkflowsWorkflowIdExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkflowsWorkflowIdRunRouteHandler: RouteHandler<
  typeof postWorkflowsWorkflowIdRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}
