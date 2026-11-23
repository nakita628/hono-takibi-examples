import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMetricsActiveConnectionsRoute,
  getMetricsBandwidthRoute,
  getMetricsBandwidthSourcesRoute,
  getMetricsCpuLimitRoute,
  getMetricsCpuRoute,
  getMetricsCpuTargetRoute,
  getMetricsDiskCapacityRoute,
  getMetricsDiskUsageRoute,
  getMetricsFiltersApplicationRoute,
  getMetricsFiltersHttpRoute,
  getMetricsFiltersPathRoute,
  getMetricsHttpLatencyRoute,
  getMetricsHttpRequestsRoute,
  getMetricsInstanceCountRoute,
  getMetricsMemoryLimitRoute,
  getMetricsMemoryRoute,
  getMetricsMemoryTargetRoute,
  getMetricsReplicationLagRoute,
  getMetricsTaskRunsCompletedRoute,
  getMetricsTaskRunsQueuedRoute,
} from '../routes'

export const getMetricsCpuRouteHandler: RouteHandler<typeof getMetricsCpuRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsCpuLimitRouteHandler: RouteHandler<typeof getMetricsCpuLimitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMetricsCpuTargetRouteHandler: RouteHandler<
  typeof getMetricsCpuTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsMemoryRouteHandler: RouteHandler<typeof getMetricsMemoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMetricsMemoryLimitRouteHandler: RouteHandler<
  typeof getMetricsMemoryLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsMemoryTargetRouteHandler: RouteHandler<
  typeof getMetricsMemoryTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsHttpRequestsRouteHandler: RouteHandler<
  typeof getMetricsHttpRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsHttpLatencyRouteHandler: RouteHandler<
  typeof getMetricsHttpLatencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsBandwidthRouteHandler: RouteHandler<
  typeof getMetricsBandwidthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsBandwidthSourcesRouteHandler: RouteHandler<
  typeof getMetricsBandwidthSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsDiskUsageRouteHandler: RouteHandler<
  typeof getMetricsDiskUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsDiskCapacityRouteHandler: RouteHandler<
  typeof getMetricsDiskCapacityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsInstanceCountRouteHandler: RouteHandler<
  typeof getMetricsInstanceCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsActiveConnectionsRouteHandler: RouteHandler<
  typeof getMetricsActiveConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsReplicationLagRouteHandler: RouteHandler<
  typeof getMetricsReplicationLagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsFiltersApplicationRouteHandler: RouteHandler<
  typeof getMetricsFiltersApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsFiltersHttpRouteHandler: RouteHandler<
  typeof getMetricsFiltersHttpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsFiltersPathRouteHandler: RouteHandler<
  typeof getMetricsFiltersPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsTaskRunsQueuedRouteHandler: RouteHandler<
  typeof getMetricsTaskRunsQueuedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsTaskRunsCompletedRouteHandler: RouteHandler<
  typeof getMetricsTaskRunsCompletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
