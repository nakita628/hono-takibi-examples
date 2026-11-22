import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2MonitoringAlertsAlertUuidRoute,
  deleteV2MonitoringSinksDestinationsDestinationUuidRoute,
  deleteV2MonitoringSinksSinkUuidRoute,
  getV2MonitoringAlertsAlertUuidRoute,
  getV2MonitoringAlertsRoute,
  getV2MonitoringMetricsAppsCpuPercentageRoute,
  getV2MonitoringMetricsAppsMemoryPercentageRoute,
  getV2MonitoringMetricsAppsRestartCountRoute,
  getV2MonitoringMetricsDatabaseMysqlCpuUsageRoute,
  getV2MonitoringMetricsDatabaseMysqlDiskUsageRoute,
  getV2MonitoringMetricsDatabaseMysqlIndexVsSequentialReadsRoute,
  getV2MonitoringMetricsDatabaseMysqlLoadRoute,
  getV2MonitoringMetricsDatabaseMysqlMemoryUsageRoute,
  getV2MonitoringMetricsDatabaseMysqlOpRatesRoute,
  getV2MonitoringMetricsDatabaseMysqlSchemaLatencyRoute,
  getV2MonitoringMetricsDatabaseMysqlSchemaThroughputRoute,
  getV2MonitoringMetricsDatabaseMysqlThreadsActiveRoute,
  getV2MonitoringMetricsDatabaseMysqlThreadsConnectedRoute,
  getV2MonitoringMetricsDatabaseMysqlThreadsCreatedRateRoute,
  getV2MonitoringMetricsDropletAutoscaleCurrentCpuUtilizationRoute,
  getV2MonitoringMetricsDropletAutoscaleCurrentInstancesRoute,
  getV2MonitoringMetricsDropletAutoscaleCurrentMemoryUtilizationRoute,
  getV2MonitoringMetricsDropletAutoscaleTargetCpuUtilizationRoute,
  getV2MonitoringMetricsDropletAutoscaleTargetInstancesRoute,
  getV2MonitoringMetricsDropletAutoscaleTargetMemoryUtilizationRoute,
  getV2MonitoringMetricsDropletBandwidthRoute,
  getV2MonitoringMetricsDropletCpuRoute,
  getV2MonitoringMetricsDropletFilesystemFreeRoute,
  getV2MonitoringMetricsDropletFilesystemSizeRoute,
  getV2MonitoringMetricsDropletLoad15Route,
  getV2MonitoringMetricsDropletLoad1Route,
  getV2MonitoringMetricsDropletLoad5Route,
  getV2MonitoringMetricsDropletMemoryAvailableRoute,
  getV2MonitoringMetricsDropletMemoryCachedRoute,
  getV2MonitoringMetricsDropletMemoryFreeRoute,
  getV2MonitoringMetricsDropletMemoryTotalRoute,
  getV2MonitoringMetricsLoadBalancerDropletsConnectionsRoute,
  getV2MonitoringMetricsLoadBalancerDropletsDowntimeRoute,
  getV2MonitoringMetricsLoadBalancerDropletsHealthChecksRoute,
  getV2MonitoringMetricsLoadBalancerDropletsHttpResponsesRoute,
  getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime50pRoute,
  getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime95pRoute,
  getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime99pRoute,
  getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTimeAvgRoute,
  getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDuration50pRoute,
  getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDuration95pRoute,
  getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDurationAvgRoute,
  getV2MonitoringMetricsLoadBalancerDropletsQueueSizeRoute,
  getV2MonitoringMetricsLoadBalancerFrontendConnectionsCurrentRoute,
  getV2MonitoringMetricsLoadBalancerFrontendConnectionsLimitRoute,
  getV2MonitoringMetricsLoadBalancerFrontendCpuUtilizationRoute,
  getV2MonitoringMetricsLoadBalancerFrontendFirewallDroppedBytesRoute,
  getV2MonitoringMetricsLoadBalancerFrontendFirewallDroppedPacketsRoute,
  getV2MonitoringMetricsLoadBalancerFrontendHttpRequestsPerSecondRoute,
  getV2MonitoringMetricsLoadBalancerFrontendHttpResponsesRoute,
  getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputHttpRoute,
  getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputTcpRoute,
  getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputUdpRoute,
  getV2MonitoringMetricsLoadBalancerFrontendNlbTcpNetworkThroughputRoute,
  getV2MonitoringMetricsLoadBalancerFrontendNlbUdpNetworkThroughputRoute,
  getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsCurrentRoute,
  getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsExceedingRateLimitRoute,
  getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsLimitRoute,
  getV2MonitoringSinksDestinationsDestinationUuidRoute,
  getV2MonitoringSinksDestinationsRoute,
  getV2MonitoringSinksRoute,
  getV2MonitoringSinksSinkUuidRoute,
  postV2MonitoringAlertsRoute,
  postV2MonitoringSinksDestinationsDestinationUuidRoute,
  postV2MonitoringSinksDestinationsRoute,
  postV2MonitoringSinksRoute,
  putV2MonitoringAlertsAlertUuidRoute,
} from '../routes'

export const getV2MonitoringAlertsRouteHandler: RouteHandler<
  typeof getV2MonitoringAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2MonitoringAlertsRouteHandler: RouteHandler<
  typeof postV2MonitoringAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringAlertsAlertUuidRouteHandler: RouteHandler<
  typeof getV2MonitoringAlertsAlertUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2MonitoringAlertsAlertUuidRouteHandler: RouteHandler<
  typeof putV2MonitoringAlertsAlertUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2MonitoringAlertsAlertUuidRouteHandler: RouteHandler<
  typeof deleteV2MonitoringAlertsAlertUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletBandwidthRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletBandwidthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletCpuRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletCpuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletFilesystemFreeRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletFilesystemFreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletFilesystemSizeRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletFilesystemSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletLoad1RouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletLoad1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletLoad5RouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletLoad5Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletLoad15RouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletLoad15Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletMemoryCachedRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletMemoryCachedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletMemoryFreeRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletMemoryFreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletMemoryTotalRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletMemoryTotalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletMemoryAvailableRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletMemoryAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsAppsMemoryPercentageRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsAppsMemoryPercentageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsAppsCpuPercentageRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsAppsCpuPercentageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsAppsRestartCountRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsAppsRestartCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendConnectionsCurrentRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendConnectionsCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendConnectionsLimitRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendConnectionsLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendCpuUtilizationRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendCpuUtilizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendFirewallDroppedBytesRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendFirewallDroppedBytesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendFirewallDroppedPacketsRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendFirewallDroppedPacketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendHttpResponsesRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendHttpResponsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendHttpRequestsPerSecondRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendHttpRequestsPerSecondRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputHttpRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputHttpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputUdpRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputUdpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputTcpRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputTcpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendNlbTcpNetworkThroughputRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendNlbTcpNetworkThroughputRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendNlbUdpNetworkThroughputRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendNlbUdpNetworkThroughputRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsCurrentRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsLimitRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsExceedingRateLimitRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsExceedingRateLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDurationAvgRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDurationAvgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDuration50pRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDuration50pRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDuration95pRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDuration95pRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTimeAvgRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTimeAvgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime50pRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime50pRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime95pRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime95pRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime99pRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime99pRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsQueueSizeRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsQueueSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsHttpResponsesRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsHttpResponsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsConnectionsRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsHealthChecksRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsHealthChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsLoadBalancerDropletsDowntimeRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsLoadBalancerDropletsDowntimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletAutoscaleCurrentInstancesRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletAutoscaleCurrentInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletAutoscaleTargetInstancesRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletAutoscaleTargetInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletAutoscaleCurrentCpuUtilizationRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletAutoscaleCurrentCpuUtilizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletAutoscaleTargetCpuUtilizationRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletAutoscaleTargetCpuUtilizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletAutoscaleCurrentMemoryUtilizationRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletAutoscaleCurrentMemoryUtilizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletAutoscaleTargetMemoryUtilizationRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletAutoscaleTargetMemoryUtilizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlCpuUsageRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlCpuUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlLoadRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlLoadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlMemoryUsageRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlMemoryUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlDiskUsageRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlDiskUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlThreadsConnectedRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlThreadsConnectedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlThreadsCreatedRateRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlThreadsCreatedRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlThreadsActiveRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlThreadsActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlIndexVsSequentialReadsRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlIndexVsSequentialReadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlOpRatesRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlOpRatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlSchemaThroughputRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlSchemaThroughputRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDatabaseMysqlSchemaLatencyRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDatabaseMysqlSchemaLatencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2MonitoringSinksDestinationsRouteHandler: RouteHandler<
  typeof postV2MonitoringSinksDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringSinksDestinationsRouteHandler: RouteHandler<
  typeof getV2MonitoringSinksDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringSinksDestinationsDestinationUuidRouteHandler: RouteHandler<
  typeof getV2MonitoringSinksDestinationsDestinationUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2MonitoringSinksDestinationsDestinationUuidRouteHandler: RouteHandler<
  typeof postV2MonitoringSinksDestinationsDestinationUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2MonitoringSinksDestinationsDestinationUuidRouteHandler: RouteHandler<
  typeof deleteV2MonitoringSinksDestinationsDestinationUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2MonitoringSinksRouteHandler: RouteHandler<
  typeof postV2MonitoringSinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringSinksRouteHandler: RouteHandler<
  typeof getV2MonitoringSinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringSinksSinkUuidRouteHandler: RouteHandler<
  typeof getV2MonitoringSinksSinkUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2MonitoringSinksSinkUuidRouteHandler: RouteHandler<
  typeof deleteV2MonitoringSinksSinkUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
