import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getMetricsCpuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsCpuLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsCpuTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMemoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMemoryLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMemoryTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsHttpRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsHttpLatencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsBandwidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsBandwidthSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsDiskUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsDiskCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsInstanceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsActiveConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsReplicationLagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsFiltersApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsFiltersHttpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsFiltersPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsTaskRunsQueuedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsTaskRunsCompletedRoute, (c) => {
    throw new Error('Not implemented')
  })
