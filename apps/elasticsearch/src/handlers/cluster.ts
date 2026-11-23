import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteClusterVotingConfigExclusionsRoute,
  getClusterAllocationExplainRoute,
  getClusterHealthIndexRoute,
  getClusterHealthRoute,
  getClusterPendingTasksRoute,
  getClusterSettingsRoute,
  getClusterStateMetricIndexRoute,
  getClusterStateMetricRoute,
  getClusterStateRoute,
  getClusterStatsNodesNodeIdRoute,
  getClusterStatsRoute,
  postClusterAllocationExplainRoute,
  postClusterRerouteRoute,
  postClusterVotingConfigExclusionsRoute,
  putClusterSettingsRoute,
} from '../routes'

export const getClusterAllocationExplainRouteHandler: RouteHandler<
  typeof getClusterAllocationExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClusterAllocationExplainRouteHandler: RouteHandler<
  typeof postClusterAllocationExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClusterVotingConfigExclusionsRouteHandler: RouteHandler<
  typeof postClusterVotingConfigExclusionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteClusterVotingConfigExclusionsRouteHandler: RouteHandler<
  typeof deleteClusterVotingConfigExclusionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusterSettingsRouteHandler: RouteHandler<typeof getClusterSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putClusterSettingsRouteHandler: RouteHandler<typeof putClusterSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getClusterHealthRouteHandler: RouteHandler<typeof getClusterHealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getClusterHealthIndexRouteHandler: RouteHandler<
  typeof getClusterHealthIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusterPendingTasksRouteHandler: RouteHandler<
  typeof getClusterPendingTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClusterRerouteRouteHandler: RouteHandler<typeof postClusterRerouteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getClusterStateRouteHandler: RouteHandler<typeof getClusterStateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusterStateMetricRouteHandler: RouteHandler<
  typeof getClusterStateMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusterStateMetricIndexRouteHandler: RouteHandler<
  typeof getClusterStateMetricIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusterStatsRouteHandler: RouteHandler<typeof getClusterStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusterStatsNodesNodeIdRouteHandler: RouteHandler<
  typeof getClusterStatsNodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
