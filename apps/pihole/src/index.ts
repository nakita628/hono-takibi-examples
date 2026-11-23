import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthRoute,
  deleteAuthSessionIdRoute,
  deleteClientsClientRoute,
  deleteConfigElementValueRoute,
  deleteDhcpLeasesIpRoute,
  deleteDomainsTypeKindDomainRoute,
  deleteGroupsNameRoute,
  deleteInfoMessagesMessageIdRoute,
  deleteListsListRoute,
  deleteNetworkDevicesDeviceIdRoute,
  getAuthAppRoute,
  getAuthRoute,
  getAuthSessionsRoute,
  getAuthTotpRoute,
  getClientsClientRoute,
  getClientsRoute,
  getClientsSuggestionsRoute,
  getConfigElementRoute,
  getConfigPropertiesRoute,
  getConfigRoute,
  getDhcpLeasesRoute,
  getDnsBlockingRoute,
  getDocsRoute,
  getDomainsRoute,
  getDomainsTypeKindDomainRoute,
  getDomainsTypeKindRoute,
  getDomainsTypeRoute,
  getEndpointsRoute,
  getGroupsNameRoute,
  getGroupsRoute,
  getHistoryClientsRoute,
  getHistoryDatabaseClientsRoute,
  getHistoryDatabaseRoute,
  getHistoryRoute,
  getInfoClientRoute,
  getInfoDatabaseRoute,
  getInfoFtlRoute,
  getInfoHostRoute,
  getInfoLoginRoute,
  getInfoMessagesCountRoute,
  getInfoMessagesRoute,
  getInfoMetricsRoute,
  getInfoSensorsRoute,
  getInfoSystemRoute,
  getInfoVersionRoute,
  getListsListRoute,
  getListsRoute,
  getLogsDnsmasqRoute,
  getLogsFtlRoute,
  getLogsWebserverRoute,
  getNetworkDevicesRoute,
  getNetworkGatewayRoute,
  getNetworkInterfacesRoute,
  getNetworkRoutesRoute,
  getPaddRoute,
  getQueriesRoute,
  getQueriesSuggestionsRoute,
  getSearchDomainRoute,
  getStatsDatabaseQueryTypesRoute,
  getStatsDatabaseSummaryRoute,
  getStatsDatabaseTopClientsRoute,
  getStatsDatabaseTopDomainsRoute,
  getStatsDatabaseUpstreamsRoute,
  getStatsQueryTypesRoute,
  getStatsRecentBlockedRoute,
  getStatsSummaryRoute,
  getStatsTopClientsRoute,
  getStatsTopDomainsRoute,
  getStatsUpstreamsRoute,
  getTeleporterRoute,
  patchConfigRoute,
  postActionFlushArpRoute,
  postActionFlushLogsRoute,
  postActionFlushNetworkRoute,
  postActionGravityRoute,
  postActionRestartdnsRoute,
  postAuthRoute,
  postClientsBatchDeleteRoute,
  postClientsRoute,
  postDnsBlockingRoute,
  postDomainsBatchDeleteRoute,
  postDomainsTypeKindRoute,
  postGroupsBatchDeleteRoute,
  postGroupsRoute,
  postListsBatchDeleteRoute,
  postListsRoute,
  postTeleporterRoute,
  putClientsClientRoute,
  putConfigElementValueRoute,
  putDomainsTypeKindDomainRoute,
  putGroupsNameRoute,
  putListsListRoute,
} from './routes'
import {
  deleteAuthRouteHandler,
  deleteAuthSessionIdRouteHandler,
  deleteClientsClientRouteHandler,
  deleteConfigElementValueRouteHandler,
  deleteDhcpLeasesIpRouteHandler,
  deleteDomainsTypeKindDomainRouteHandler,
  deleteGroupsNameRouteHandler,
  deleteInfoMessagesMessageIdRouteHandler,
  deleteListsListRouteHandler,
  deleteNetworkDevicesDeviceIdRouteHandler,
  getAuthAppRouteHandler,
  getAuthRouteHandler,
  getAuthSessionsRouteHandler,
  getAuthTotpRouteHandler,
  getClientsClientRouteHandler,
  getClientsRouteHandler,
  getClientsSuggestionsRouteHandler,
  getConfigElementRouteHandler,
  getConfigPropertiesRouteHandler,
  getConfigRouteHandler,
  getDhcpLeasesRouteHandler,
  getDnsBlockingRouteHandler,
  getDocsRouteHandler,
  getDomainsRouteHandler,
  getDomainsTypeKindDomainRouteHandler,
  getDomainsTypeKindRouteHandler,
  getDomainsTypeRouteHandler,
  getEndpointsRouteHandler,
  getGroupsNameRouteHandler,
  getGroupsRouteHandler,
  getHistoryClientsRouteHandler,
  getHistoryDatabaseClientsRouteHandler,
  getHistoryDatabaseRouteHandler,
  getHistoryRouteHandler,
  getInfoClientRouteHandler,
  getInfoDatabaseRouteHandler,
  getInfoFtlRouteHandler,
  getInfoHostRouteHandler,
  getInfoLoginRouteHandler,
  getInfoMessagesCountRouteHandler,
  getInfoMessagesRouteHandler,
  getInfoMetricsRouteHandler,
  getInfoSensorsRouteHandler,
  getInfoSystemRouteHandler,
  getInfoVersionRouteHandler,
  getListsListRouteHandler,
  getListsRouteHandler,
  getLogsDnsmasqRouteHandler,
  getLogsFtlRouteHandler,
  getLogsWebserverRouteHandler,
  getNetworkDevicesRouteHandler,
  getNetworkGatewayRouteHandler,
  getNetworkInterfacesRouteHandler,
  getNetworkRoutesRouteHandler,
  getPaddRouteHandler,
  getQueriesRouteHandler,
  getQueriesSuggestionsRouteHandler,
  getSearchDomainRouteHandler,
  getStatsDatabaseQueryTypesRouteHandler,
  getStatsDatabaseSummaryRouteHandler,
  getStatsDatabaseTopClientsRouteHandler,
  getStatsDatabaseTopDomainsRouteHandler,
  getStatsDatabaseUpstreamsRouteHandler,
  getStatsQueryTypesRouteHandler,
  getStatsRecentBlockedRouteHandler,
  getStatsSummaryRouteHandler,
  getStatsTopClientsRouteHandler,
  getStatsTopDomainsRouteHandler,
  getStatsUpstreamsRouteHandler,
  getTeleporterRouteHandler,
  patchConfigRouteHandler,
  postActionFlushArpRouteHandler,
  postActionFlushLogsRouteHandler,
  postActionFlushNetworkRouteHandler,
  postActionGravityRouteHandler,
  postActionRestartdnsRouteHandler,
  postAuthRouteHandler,
  postClientsBatchDeleteRouteHandler,
  postClientsRouteHandler,
  postDnsBlockingRouteHandler,
  postDomainsBatchDeleteRouteHandler,
  postDomainsTypeKindRouteHandler,
  postGroupsBatchDeleteRouteHandler,
  postGroupsRouteHandler,
  postListsBatchDeleteRouteHandler,
  postListsRouteHandler,
  postTeleporterRouteHandler,
  putClientsClientRouteHandler,
  putConfigElementValueRouteHandler,
  putDomainsTypeKindDomainRouteHandler,
  putGroupsNameRouteHandler,
  putListsListRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAuthRoute, getAuthRouteHandler)
  .openapi(postAuthRoute, postAuthRouteHandler)
  .openapi(deleteAuthRoute, deleteAuthRouteHandler)
  .openapi(deleteAuthSessionIdRoute, deleteAuthSessionIdRouteHandler)
  .openapi(getAuthSessionsRoute, getAuthSessionsRouteHandler)
  .openapi(getAuthTotpRoute, getAuthTotpRouteHandler)
  .openapi(getAuthAppRoute, getAuthAppRouteHandler)
  .openapi(getStatsSummaryRoute, getStatsSummaryRouteHandler)
  .openapi(getStatsDatabaseSummaryRoute, getStatsDatabaseSummaryRouteHandler)
  .openapi(getStatsUpstreamsRoute, getStatsUpstreamsRouteHandler)
  .openapi(getStatsDatabaseUpstreamsRoute, getStatsDatabaseUpstreamsRouteHandler)
  .openapi(getStatsTopDomainsRoute, getStatsTopDomainsRouteHandler)
  .openapi(getStatsDatabaseTopDomainsRoute, getStatsDatabaseTopDomainsRouteHandler)
  .openapi(getStatsTopClientsRoute, getStatsTopClientsRouteHandler)
  .openapi(getStatsDatabaseTopClientsRoute, getStatsDatabaseTopClientsRouteHandler)
  .openapi(getStatsQueryTypesRoute, getStatsQueryTypesRouteHandler)
  .openapi(getStatsDatabaseQueryTypesRoute, getStatsDatabaseQueryTypesRouteHandler)
  .openapi(getStatsRecentBlockedRoute, getStatsRecentBlockedRouteHandler)
  .openapi(getHistoryRoute, getHistoryRouteHandler)
  .openapi(getHistoryClientsRoute, getHistoryClientsRouteHandler)
  .openapi(getHistoryDatabaseRoute, getHistoryDatabaseRouteHandler)
  .openapi(getHistoryDatabaseClientsRoute, getHistoryDatabaseClientsRouteHandler)
  .openapi(getQueriesRoute, getQueriesRouteHandler)
  .openapi(getQueriesSuggestionsRoute, getQueriesSuggestionsRouteHandler)
  .openapi(getDnsBlockingRoute, getDnsBlockingRouteHandler)
  .openapi(postDnsBlockingRoute, postDnsBlockingRouteHandler)
  .openapi(getDomainsTypeKindDomainRoute, getDomainsTypeKindDomainRouteHandler)
  .openapi(putDomainsTypeKindDomainRoute, putDomainsTypeKindDomainRouteHandler)
  .openapi(deleteDomainsTypeKindDomainRoute, deleteDomainsTypeKindDomainRouteHandler)
  .openapi(getDomainsTypeKindRoute, getDomainsTypeKindRouteHandler)
  .openapi(postDomainsTypeKindRoute, postDomainsTypeKindRouteHandler)
  .openapi(getDomainsTypeRoute, getDomainsTypeRouteHandler)
  .openapi(getDomainsRoute, getDomainsRouteHandler)
  .openapi(postDomainsBatchDeleteRoute, postDomainsBatchDeleteRouteHandler)
  .openapi(getGroupsNameRoute, getGroupsNameRouteHandler)
  .openapi(putGroupsNameRoute, putGroupsNameRouteHandler)
  .openapi(deleteGroupsNameRoute, deleteGroupsNameRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(postGroupsBatchDeleteRoute, postGroupsBatchDeleteRouteHandler)
  .openapi(getClientsClientRoute, getClientsClientRouteHandler)
  .openapi(putClientsClientRoute, putClientsClientRouteHandler)
  .openapi(deleteClientsClientRoute, deleteClientsClientRouteHandler)
  .openapi(getClientsRoute, getClientsRouteHandler)
  .openapi(postClientsRoute, postClientsRouteHandler)
  .openapi(postClientsBatchDeleteRoute, postClientsBatchDeleteRouteHandler)
  .openapi(getClientsSuggestionsRoute, getClientsSuggestionsRouteHandler)
  .openapi(getListsListRoute, getListsListRouteHandler)
  .openapi(putListsListRoute, putListsListRouteHandler)
  .openapi(deleteListsListRoute, deleteListsListRouteHandler)
  .openapi(getListsRoute, getListsRouteHandler)
  .openapi(postListsRoute, postListsRouteHandler)
  .openapi(postListsBatchDeleteRoute, postListsBatchDeleteRouteHandler)
  .openapi(getInfoClientRoute, getInfoClientRouteHandler)
  .openapi(getInfoSystemRoute, getInfoSystemRouteHandler)
  .openapi(getInfoDatabaseRoute, getInfoDatabaseRouteHandler)
  .openapi(getInfoFtlRoute, getInfoFtlRouteHandler)
  .openapi(getInfoHostRoute, getInfoHostRouteHandler)
  .openapi(getInfoSensorsRoute, getInfoSensorsRouteHandler)
  .openapi(getInfoVersionRoute, getInfoVersionRouteHandler)
  .openapi(getInfoMessagesRoute, getInfoMessagesRouteHandler)
  .openapi(deleteInfoMessagesMessageIdRoute, deleteInfoMessagesMessageIdRouteHandler)
  .openapi(getInfoMessagesCountRoute, getInfoMessagesCountRouteHandler)
  .openapi(getInfoMetricsRoute, getInfoMetricsRouteHandler)
  .openapi(getInfoLoginRoute, getInfoLoginRouteHandler)
  .openapi(getLogsDnsmasqRoute, getLogsDnsmasqRouteHandler)
  .openapi(getLogsFtlRoute, getLogsFtlRouteHandler)
  .openapi(getLogsWebserverRoute, getLogsWebserverRouteHandler)
  .openapi(getEndpointsRoute, getEndpointsRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(patchConfigRoute, patchConfigRouteHandler)
  .openapi(getConfigPropertiesRoute, getConfigPropertiesRouteHandler)
  .openapi(getConfigElementRoute, getConfigElementRouteHandler)
  .openapi(putConfigElementValueRoute, putConfigElementValueRouteHandler)
  .openapi(deleteConfigElementValueRoute, deleteConfigElementValueRouteHandler)
  .openapi(getNetworkDevicesRoute, getNetworkDevicesRouteHandler)
  .openapi(deleteNetworkDevicesDeviceIdRoute, deleteNetworkDevicesDeviceIdRouteHandler)
  .openapi(getNetworkGatewayRoute, getNetworkGatewayRouteHandler)
  .openapi(getNetworkRoutesRoute, getNetworkRoutesRouteHandler)
  .openapi(getNetworkInterfacesRoute, getNetworkInterfacesRouteHandler)
  .openapi(getTeleporterRoute, getTeleporterRouteHandler)
  .openapi(postTeleporterRoute, postTeleporterRouteHandler)
  .openapi(postActionGravityRoute, postActionGravityRouteHandler)
  .openapi(postActionRestartdnsRoute, postActionRestartdnsRouteHandler)
  .openapi(postActionFlushLogsRoute, postActionFlushLogsRouteHandler)
  .openapi(postActionFlushArpRoute, postActionFlushArpRouteHandler)
  .openapi(postActionFlushNetworkRoute, postActionFlushNetworkRouteHandler)
  .openapi(getDhcpLeasesRoute, getDhcpLeasesRouteHandler)
  .openapi(deleteDhcpLeasesIpRoute, deleteDhcpLeasesIpRouteHandler)
  .openapi(getSearchDomainRoute, getSearchDomainRouteHandler)
  .openapi(getDocsRoute, getDocsRouteHandler)
  .openapi(getPaddRoute, getPaddRouteHandler)

export default app
