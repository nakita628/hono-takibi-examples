import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdvancedGuidRoute,
  deleteAgentsSubscriptionsSubscriptionIdRoute,
  deleteAliasesAliasIdRoute,
  deleteAuthSessionsSessionIdRoute,
  deleteAuthTokensTokenIdRoute,
  deleteDashboardsDashboardIdRoute,
  deleteHepsubsHepsubIdRoute,
  deleteIpaliasesAliasIdRoute,
  deleteMappingsMappingIdRoute,
  deleteMeSettingsCategoryRoute,
  deleteScriptsScriptIdRoute,
  deleteUsersUserIdRoute,
  getAdvancedGuidRoute,
  getAdvancedRoute,
  getAgentsSubscriptionsRoute,
  getAgentsSubscriptionsSubscriptionIdRoute,
  getAgentsTypesRoute,
  getAgentsTypesTypeRoute,
  getAliasesRoute,
  getAuthOauth2ProviderCallbackRoute,
  getAuthOauth2ProviderRedirectRoute,
  getAuthProvidersRoute,
  getAuthTokensRoute,
  getAuthTokensTokenIdRoute,
  getDashboardsDashboardIdRoute,
  getDashboardsRoute,
  getDbNodesRoute,
  getExportsExportIdDownloadRoute,
  getExportsExportIdRoute,
  getHepsubsHepsubIdRoute,
  getHepsubsRoute,
  getIntegrationsGrafanaDashboardsUidRoute,
  getIntegrationsGrafanaFoldersRoute,
  getIntegrationsGrafanaStatusRoute,
  getIpaliasesRoute,
  getLogsLokiLabelsRoute,
  getLogsLokiValuesRoute,
  getMappingsFieldsRoute,
  getMappingsMappingIdRoute,
  getMappingsRoute,
  getMeRoute,
  getMeSettingsRoute,
  getMessagesMessageIdDecodedRoute,
  getMessagesMessageIdRoute,
  getModulesRoute,
  getOpenapiJsonRoute,
  getScriptsRoute,
  getScriptsScriptIdRoute,
  getStatisticsDatabasesRoute,
  getStatisticsMeasurementsRoute,
  getStatisticsMetricsRoute,
  getStatisticsTagsRoute,
  getStreamHepRoute,
  getTransactionsRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  patchUsersUserIdRoute,
  postAdvancedRoute,
  postAgentsSearchRoute,
  postAgentsSubscriptionsRoute,
  postAliasesRoute,
  postAuthOauth2TokenRoute,
  postAuthSessionsRoute,
  postAuthTokensRoute,
  postDashboardsRoute,
  postExportsRoute,
  postHepsubsRoute,
  postImportsPcapRoute,
  postIpaliasesRoute,
  postLogsLokiQueryRoute,
  postMappingsRoute,
  postMeDashboardsResetRoute,
  postScriptsRoute,
  postStatisticsQueryRoute,
  postTransactionsMessagesRoute,
  postTransactionsQosRoute,
  postTransactionsSearchRoute,
  postUsersRoute,
  putAdvancedGuidRoute,
  putAgentsSubscriptionsSubscriptionIdRoute,
  putAliasesAliasIdRoute,
  putAuthTokensTokenIdRoute,
  putDashboardsDashboardIdRoute,
  putHepsubsHepsubIdRoute,
  putIpaliasesAliasIdRoute,
  putMappingsMappingIdRoute,
  putMeSettingsCategoryRoute,
  putScriptsScriptIdRoute,
} from './routes'
import {
  deleteAdvancedGuidRouteHandler,
  deleteAgentsSubscriptionsSubscriptionIdRouteHandler,
  deleteAliasesAliasIdRouteHandler,
  deleteAuthSessionsSessionIdRouteHandler,
  deleteAuthTokensTokenIdRouteHandler,
  deleteDashboardsDashboardIdRouteHandler,
  deleteHepsubsHepsubIdRouteHandler,
  deleteIpaliasesAliasIdRouteHandler,
  deleteMappingsMappingIdRouteHandler,
  deleteMeSettingsCategoryRouteHandler,
  deleteScriptsScriptIdRouteHandler,
  deleteUsersUserIdRouteHandler,
  getAdvancedGuidRouteHandler,
  getAdvancedRouteHandler,
  getAgentsSubscriptionsRouteHandler,
  getAgentsSubscriptionsSubscriptionIdRouteHandler,
  getAgentsTypesRouteHandler,
  getAgentsTypesTypeRouteHandler,
  getAliasesRouteHandler,
  getAuthOauth2ProviderCallbackRouteHandler,
  getAuthOauth2ProviderRedirectRouteHandler,
  getAuthProvidersRouteHandler,
  getAuthTokensRouteHandler,
  getAuthTokensTokenIdRouteHandler,
  getDashboardsDashboardIdRouteHandler,
  getDashboardsRouteHandler,
  getDbNodesRouteHandler,
  getExportsExportIdDownloadRouteHandler,
  getExportsExportIdRouteHandler,
  getHepsubsHepsubIdRouteHandler,
  getHepsubsRouteHandler,
  getIntegrationsGrafanaDashboardsUidRouteHandler,
  getIntegrationsGrafanaFoldersRouteHandler,
  getIntegrationsGrafanaStatusRouteHandler,
  getIpaliasesRouteHandler,
  getLogsLokiLabelsRouteHandler,
  getLogsLokiValuesRouteHandler,
  getMappingsFieldsRouteHandler,
  getMappingsMappingIdRouteHandler,
  getMappingsRouteHandler,
  getMeRouteHandler,
  getMeSettingsRouteHandler,
  getMessagesMessageIdDecodedRouteHandler,
  getMessagesMessageIdRouteHandler,
  getModulesRouteHandler,
  getOpenapiJsonRouteHandler,
  getScriptsRouteHandler,
  getScriptsScriptIdRouteHandler,
  getStatisticsDatabasesRouteHandler,
  getStatisticsMeasurementsRouteHandler,
  getStatisticsMetricsRouteHandler,
  getStatisticsTagsRouteHandler,
  getStreamHepRouteHandler,
  getTransactionsRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdRouteHandler,
  patchUsersUserIdRouteHandler,
  postAdvancedRouteHandler,
  postAgentsSearchRouteHandler,
  postAgentsSubscriptionsRouteHandler,
  postAliasesRouteHandler,
  postAuthOauth2TokenRouteHandler,
  postAuthSessionsRouteHandler,
  postAuthTokensRouteHandler,
  postDashboardsRouteHandler,
  postExportsRouteHandler,
  postHepsubsRouteHandler,
  postImportsPcapRouteHandler,
  postIpaliasesRouteHandler,
  postLogsLokiQueryRouteHandler,
  postMappingsRouteHandler,
  postMeDashboardsResetRouteHandler,
  postScriptsRouteHandler,
  postStatisticsQueryRouteHandler,
  postTransactionsMessagesRouteHandler,
  postTransactionsQosRouteHandler,
  postTransactionsSearchRouteHandler,
  postUsersRouteHandler,
  putAdvancedGuidRouteHandler,
  putAgentsSubscriptionsSubscriptionIdRouteHandler,
  putAliasesAliasIdRouteHandler,
  putAuthTokensTokenIdRouteHandler,
  putDashboardsDashboardIdRouteHandler,
  putHepsubsHepsubIdRouteHandler,
  putIpaliasesAliasIdRouteHandler,
  putMappingsMappingIdRouteHandler,
  putMeSettingsCategoryRouteHandler,
  putScriptsScriptIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAuthSessionsRoute, postAuthSessionsRouteHandler)
  .openapi(deleteAuthSessionsSessionIdRoute, deleteAuthSessionsSessionIdRouteHandler)
  .openapi(getAuthProvidersRoute, getAuthProvidersRouteHandler)
  .openapi(getAuthOauth2ProviderRedirectRoute, getAuthOauth2ProviderRedirectRouteHandler)
  .openapi(getAuthOauth2ProviderCallbackRoute, getAuthOauth2ProviderCallbackRouteHandler)
  .openapi(postAuthOauth2TokenRoute, postAuthOauth2TokenRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(patchUsersUserIdRoute, patchUsersUserIdRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getMeSettingsRoute, getMeSettingsRouteHandler)
  .openapi(putMeSettingsCategoryRoute, putMeSettingsCategoryRouteHandler)
  .openapi(deleteMeSettingsCategoryRoute, deleteMeSettingsCategoryRouteHandler)
  .openapi(getTransactionsRoute, getTransactionsRouteHandler)
  .openapi(postTransactionsSearchRoute, postTransactionsSearchRouteHandler)
  .openapi(postTransactionsMessagesRoute, postTransactionsMessagesRouteHandler)
  .openapi(getMessagesMessageIdRoute, getMessagesMessageIdRouteHandler)
  .openapi(getMessagesMessageIdDecodedRoute, getMessagesMessageIdDecodedRouteHandler)
  .openapi(postTransactionsQosRoute, postTransactionsQosRouteHandler)
  .openapi(postExportsRoute, postExportsRouteHandler)
  .openapi(getExportsExportIdRoute, getExportsExportIdRouteHandler)
  .openapi(getExportsExportIdDownloadRoute, getExportsExportIdDownloadRouteHandler)
  .openapi(postImportsPcapRoute, postImportsPcapRouteHandler)
  .openapi(getDashboardsRoute, getDashboardsRouteHandler)
  .openapi(postDashboardsRoute, postDashboardsRouteHandler)
  .openapi(getDashboardsDashboardIdRoute, getDashboardsDashboardIdRouteHandler)
  .openapi(putDashboardsDashboardIdRoute, putDashboardsDashboardIdRouteHandler)
  .openapi(deleteDashboardsDashboardIdRoute, deleteDashboardsDashboardIdRouteHandler)
  .openapi(postMeDashboardsResetRoute, postMeDashboardsResetRouteHandler)
  .openapi(getMappingsRoute, getMappingsRouteHandler)
  .openapi(postMappingsRoute, postMappingsRouteHandler)
  .openapi(getMappingsMappingIdRoute, getMappingsMappingIdRouteHandler)
  .openapi(putMappingsMappingIdRoute, putMappingsMappingIdRouteHandler)
  .openapi(deleteMappingsMappingIdRoute, deleteMappingsMappingIdRouteHandler)
  .openapi(getMappingsFieldsRoute, getMappingsFieldsRouteHandler)
  .openapi(getHepsubsRoute, getHepsubsRouteHandler)
  .openapi(postHepsubsRoute, postHepsubsRouteHandler)
  .openapi(getHepsubsHepsubIdRoute, getHepsubsHepsubIdRouteHandler)
  .openapi(putHepsubsHepsubIdRoute, putHepsubsHepsubIdRouteHandler)
  .openapi(deleteHepsubsHepsubIdRoute, deleteHepsubsHepsubIdRouteHandler)
  .openapi(getAliasesRoute, getAliasesRouteHandler)
  .openapi(postAliasesRoute, postAliasesRouteHandler)
  .openapi(putAliasesAliasIdRoute, putAliasesAliasIdRouteHandler)
  .openapi(deleteAliasesAliasIdRoute, deleteAliasesAliasIdRouteHandler)
  .openapi(getIpaliasesRoute, getIpaliasesRouteHandler)
  .openapi(postIpaliasesRoute, postIpaliasesRouteHandler)
  .openapi(putIpaliasesAliasIdRoute, putIpaliasesAliasIdRouteHandler)
  .openapi(deleteIpaliasesAliasIdRoute, deleteIpaliasesAliasIdRouteHandler)
  .openapi(getAdvancedRoute, getAdvancedRouteHandler)
  .openapi(postAdvancedRoute, postAdvancedRouteHandler)
  .openapi(getAdvancedGuidRoute, getAdvancedGuidRouteHandler)
  .openapi(putAdvancedGuidRoute, putAdvancedGuidRouteHandler)
  .openapi(deleteAdvancedGuidRoute, deleteAdvancedGuidRouteHandler)
  .openapi(getScriptsRoute, getScriptsRouteHandler)
  .openapi(postScriptsRoute, postScriptsRouteHandler)
  .openapi(getScriptsScriptIdRoute, getScriptsScriptIdRouteHandler)
  .openapi(putScriptsScriptIdRoute, putScriptsScriptIdRouteHandler)
  .openapi(deleteScriptsScriptIdRoute, deleteScriptsScriptIdRouteHandler)
  .openapi(getOpenapiJsonRoute, getOpenapiJsonRouteHandler)
  .openapi(getAuthTokensRoute, getAuthTokensRouteHandler)
  .openapi(postAuthTokensRoute, postAuthTokensRouteHandler)
  .openapi(getAuthTokensTokenIdRoute, getAuthTokensTokenIdRouteHandler)
  .openapi(putAuthTokensTokenIdRoute, putAuthTokensTokenIdRouteHandler)
  .openapi(deleteAuthTokensTokenIdRoute, deleteAuthTokensTokenIdRouteHandler)
  .openapi(getAgentsSubscriptionsRoute, getAgentsSubscriptionsRouteHandler)
  .openapi(postAgentsSubscriptionsRoute, postAgentsSubscriptionsRouteHandler)
  .openapi(
    getAgentsSubscriptionsSubscriptionIdRoute,
    getAgentsSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    putAgentsSubscriptionsSubscriptionIdRoute,
    putAgentsSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    deleteAgentsSubscriptionsSubscriptionIdRoute,
    deleteAgentsSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(getAgentsTypesRoute, getAgentsTypesRouteHandler)
  .openapi(getAgentsTypesTypeRoute, getAgentsTypesTypeRouteHandler)
  .openapi(postAgentsSearchRoute, postAgentsSearchRouteHandler)
  .openapi(getDbNodesRoute, getDbNodesRouteHandler)
  .openapi(getModulesRoute, getModulesRouteHandler)
  .openapi(postStatisticsQueryRoute, postStatisticsQueryRouteHandler)
  .openapi(getStatisticsDatabasesRoute, getStatisticsDatabasesRouteHandler)
  .openapi(getStatisticsMeasurementsRoute, getStatisticsMeasurementsRouteHandler)
  .openapi(getStatisticsMetricsRoute, getStatisticsMetricsRouteHandler)
  .openapi(getStatisticsTagsRoute, getStatisticsTagsRouteHandler)
  .openapi(getLogsLokiLabelsRoute, getLogsLokiLabelsRouteHandler)
  .openapi(getLogsLokiValuesRoute, getLogsLokiValuesRouteHandler)
  .openapi(postLogsLokiQueryRoute, postLogsLokiQueryRouteHandler)
  .openapi(getIntegrationsGrafanaStatusRoute, getIntegrationsGrafanaStatusRouteHandler)
  .openapi(getIntegrationsGrafanaFoldersRoute, getIntegrationsGrafanaFoldersRouteHandler)
  .openapi(
    getIntegrationsGrafanaDashboardsUidRoute,
    getIntegrationsGrafanaDashboardsUidRouteHandler,
  )
  .openapi(getStreamHepRoute, getStreamHepRouteHandler)

export default app
