import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthorizationsAuthIDRoute,
  deleteBucketsBucketIDLabelsLabelIDRoute,
  deleteBucketsBucketIDMembersUserIDRoute,
  deleteBucketsBucketIDOwnersUserIDRoute,
  deleteBucketsBucketIDRoute,
  deleteChecksCheckIDLabelsLabelIDRoute,
  deleteChecksCheckIDRoute,
  deleteDashboardsDashboardIDCellsCellIDRoute,
  deleteDashboardsDashboardIDLabelsLabelIDRoute,
  deleteDashboardsDashboardIDMembersUserIDRoute,
  deleteDashboardsDashboardIDOwnersUserIDRoute,
  deleteDashboardsDashboardIDRoute,
  deleteDbrpsDbrpIDRoute,
  deleteLabelsLabelIDRoute,
  deleteNotificationEndpointsEndpointIDLabelsLabelIDRoute,
  deleteNotificationEndpointsEndpointIDRoute,
  deleteNotificationRulesRuleIDLabelsLabelIDRoute,
  deleteNotificationRulesRuleIDRoute,
  deleteOrgsOrgIDMembersUserIDRoute,
  deleteOrgsOrgIDOwnersUserIDRoute,
  deleteOrgsOrgIDRoute,
  deleteOrgsOrgIDSecretsSecretIDRoute,
  deleteRemotesRemoteIDRoute,
  deleteReplicationsReplicationIDRoute,
  deleteScrapersScraperTargetIDLabelsLabelIDRoute,
  deleteScrapersScraperTargetIDMembersUserIDRoute,
  deleteScrapersScraperTargetIDOwnersUserIDRoute,
  deleteScrapersScraperTargetIDRoute,
  deleteSourcesSourceIDRoute,
  deleteStacksStackIdRoute,
  deleteTasksTaskIDLabelsLabelIDRoute,
  deleteTasksTaskIDMembersUserIDRoute,
  deleteTasksTaskIDOwnersUserIDRoute,
  deleteTasksTaskIDRoute,
  deleteTasksTaskIDRunsRunIDRoute,
  deleteTelegrafsTelegrafIDLabelsLabelIDRoute,
  deleteTelegrafsTelegrafIDMembersUserIDRoute,
  deleteTelegrafsTelegrafIDOwnersUserIDRoute,
  deleteTelegrafsTelegrafIDRoute,
  deleteUsersUserIDRoute,
  deleteVariablesVariableIDLabelsLabelIDRoute,
  deleteVariablesVariableIDRoute,
  getAuthorizationsAuthIDRoute,
  getAuthorizationsRoute,
  getBackupKvRoute,
  getBackupMetadataRoute,
  getBackupShardsShardIDRoute,
  getBucketsBucketIDLabelsRoute,
  getBucketsBucketIDMembersRoute,
  getBucketsBucketIDOwnersRoute,
  getBucketsBucketIDRoute,
  getBucketsRoute,
  getChecksCheckIDLabelsRoute,
  getChecksCheckIDQueryRoute,
  getChecksCheckIDRoute,
  getChecksRoute,
  getConfigRoute,
  getDashboardsDashboardIDCellsCellIDViewRoute,
  getDashboardsDashboardIDLabelsRoute,
  getDashboardsDashboardIDMembersRoute,
  getDashboardsDashboardIDOwnersRoute,
  getDashboardsDashboardIDRoute,
  getDashboardsRoute,
  getDbrpsDbrpIDRoute,
  getDbrpsRoute,
  getDebugPprofAllocsRoute,
  getDebugPprofAllRoute,
  getDebugPprofBlockRoute,
  getDebugPprofCmdlineRoute,
  getDebugPprofGoroutineRoute,
  getDebugPprofHeapRoute,
  getDebugPprofMutexRoute,
  getDebugPprofProfileRoute,
  getDebugPprofThreadcreateRoute,
  getDebugPprofTraceRoute,
  getFlagsRoute,
  getHealthRoute,
  getLabelsLabelIDRoute,
  getLabelsRoute,
  getMeRoute,
  getMetricsRoute,
  getNotificationEndpointsEndpointIDLabelsRoute,
  getNotificationEndpointsEndpointIDRoute,
  getNotificationEndpointsRoute,
  getNotificationRulesRoute,
  getNotificationRulesRuleIDLabelsRoute,
  getNotificationRulesRuleIDQueryRoute,
  getNotificationRulesRuleIDRoute,
  getOrgsOrgIDMembersRoute,
  getOrgsOrgIDOwnersRoute,
  getOrgsOrgIDRoute,
  getOrgsOrgIDSecretsRoute,
  getOrgsRoute,
  getPingRoute,
  getQuerySuggestionsNameRoute,
  getQuerySuggestionsRoute,
  getReadyRoute,
  getRemotesRemoteIDRoute,
  getRemotesRoute,
  getReplicationsReplicationIDRoute,
  getReplicationsRoute,
  getResourcesRoute,
  getRoute,
  getScrapersRoute,
  getScrapersScraperTargetIDLabelsRoute,
  getScrapersScraperTargetIDMembersRoute,
  getScrapersScraperTargetIDOwnersRoute,
  getScrapersScraperTargetIDRoute,
  getSetupRoute,
  getSourcesRoute,
  getSourcesSourceIDBucketsRoute,
  getSourcesSourceIDHealthRoute,
  getSourcesSourceIDRoute,
  getStacksRoute,
  getStacksStackIdRoute,
  getTasksRoute,
  getTasksTaskIDLabelsRoute,
  getTasksTaskIDLogsRoute,
  getTasksTaskIDMembersRoute,
  getTasksTaskIDOwnersRoute,
  getTasksTaskIDRoute,
  getTasksTaskIDRunsRoute,
  getTasksTaskIDRunsRunIDLogsRoute,
  getTasksTaskIDRunsRunIDRoute,
  getTelegrafPluginsRoute,
  getTelegrafsRoute,
  getTelegrafsTelegrafIDLabelsRoute,
  getTelegrafsTelegrafIDMembersRoute,
  getTelegrafsTelegrafIDOwnersRoute,
  getTelegrafsTelegrafIDRoute,
  getUsersRoute,
  getUsersUserIDRoute,
  getVariablesRoute,
  getVariablesVariableIDLabelsRoute,
  getVariablesVariableIDRoute,
  headPingRoute,
  patchAuthorizationsAuthIDRoute,
  patchBucketsBucketIDRoute,
  patchChecksCheckIDRoute,
  patchDashboardsDashboardIDCellsCellIDRoute,
  patchDashboardsDashboardIDCellsCellIDViewRoute,
  patchDashboardsDashboardIDRoute,
  patchDbrpsDbrpIDRoute,
  patchLabelsLabelIDRoute,
  patchNotificationEndpointsEndpointIDRoute,
  patchNotificationRulesRuleIDRoute,
  patchOrgsOrgIDRoute,
  patchOrgsOrgIDSecretsRoute,
  patchRemotesRemoteIDRoute,
  patchReplicationsReplicationIDRoute,
  patchScrapersScraperTargetIDRoute,
  patchSourcesSourceIDRoute,
  patchStacksStackIdRoute,
  patchTasksTaskIDRoute,
  patchUsersUserIDRoute,
  patchVariablesVariableIDRoute,
  postAuthorizationsRoute,
  postBucketsBucketIDLabelsRoute,
  postBucketsBucketIDMembersRoute,
  postBucketsBucketIDOwnersRoute,
  postBucketsRoute,
  postChecksCheckIDLabelsRoute,
  postChecksRoute,
  postDashboardsDashboardIDCellsRoute,
  postDashboardsDashboardIDLabelsRoute,
  postDashboardsDashboardIDMembersRoute,
  postDashboardsDashboardIDOwnersRoute,
  postDashboardsRoute,
  postDbrpsRoute,
  postDeleteRoute,
  postLabelsRoute,
  postNotificationEndpointsEndpointIDLabelsRoute,
  postNotificationEndpointsRoute,
  postNotificationRulesRoute,
  postNotificationRulesRuleIDLabelsRoute,
  postOrgsOrgIDMembersRoute,
  postOrgsOrgIDOwnersRoute,
  postOrgsOrgIDSecretsDeleteRoute,
  postOrgsRoute,
  postQueryAnalyzeRoute,
  postQueryAstRoute,
  postQueryRoute,
  postRemotesRoute,
  postReplicationsReplicationIDValidateRoute,
  postReplicationsRoute,
  postRestoreBucketBucketIDRoute,
  postRestoreBucketMetadataRoute,
  postRestoreKvRoute,
  postRestoreShardsShardIDRoute,
  postRestoreSqlRoute,
  postScrapersRoute,
  postScrapersScraperTargetIDLabelsRoute,
  postScrapersScraperTargetIDMembersRoute,
  postScrapersScraperTargetIDOwnersRoute,
  postSetupRoute,
  postSigninRoute,
  postSignoutRoute,
  postSourcesRoute,
  postStacksRoute,
  postStacksStackIdUninstallRoute,
  postTasksRoute,
  postTasksTaskIDLabelsRoute,
  postTasksTaskIDMembersRoute,
  postTasksTaskIDOwnersRoute,
  postTasksTaskIDRunsRoute,
  postTasksTaskIDRunsRunIDRetryRoute,
  postTelegrafsRoute,
  postTelegrafsTelegrafIDLabelsRoute,
  postTelegrafsTelegrafIDMembersRoute,
  postTelegrafsTelegrafIDOwnersRoute,
  postTemplatesApplyRoute,
  postTemplatesExportRoute,
  postUsersRoute,
  postUsersUserIDPasswordRoute,
  postVariablesRoute,
  postVariablesVariableIDLabelsRoute,
  postWriteRoute,
  putChecksCheckIDRoute,
  putDashboardsDashboardIDCellsRoute,
  putMePasswordRoute,
  putNotificationEndpointsEndpointIDRoute,
  putNotificationRulesRuleIDRoute,
  putTelegrafsTelegrafIDRoute,
  putUsersUserIDPasswordRoute,
  putVariablesVariableIDRoute,
} from './routes'
import {
  deleteAuthorizationsAuthIDRouteHandler,
  deleteBucketsBucketIDLabelsLabelIDRouteHandler,
  deleteBucketsBucketIDMembersUserIDRouteHandler,
  deleteBucketsBucketIDOwnersUserIDRouteHandler,
  deleteBucketsBucketIDRouteHandler,
  deleteChecksCheckIDLabelsLabelIDRouteHandler,
  deleteChecksCheckIDRouteHandler,
  deleteDashboardsDashboardIDCellsCellIDRouteHandler,
  deleteDashboardsDashboardIDLabelsLabelIDRouteHandler,
  deleteDashboardsDashboardIDMembersUserIDRouteHandler,
  deleteDashboardsDashboardIDOwnersUserIDRouteHandler,
  deleteDashboardsDashboardIDRouteHandler,
  deleteDbrpsDbrpIDRouteHandler,
  deleteLabelsLabelIDRouteHandler,
  deleteNotificationEndpointsEndpointIDLabelsLabelIDRouteHandler,
  deleteNotificationEndpointsEndpointIDRouteHandler,
  deleteNotificationRulesRuleIDLabelsLabelIDRouteHandler,
  deleteNotificationRulesRuleIDRouteHandler,
  deleteOrgsOrgIDMembersUserIDRouteHandler,
  deleteOrgsOrgIDOwnersUserIDRouteHandler,
  deleteOrgsOrgIDRouteHandler,
  deleteOrgsOrgIDSecretsSecretIDRouteHandler,
  deleteRemotesRemoteIDRouteHandler,
  deleteReplicationsReplicationIDRouteHandler,
  deleteScrapersScraperTargetIDLabelsLabelIDRouteHandler,
  deleteScrapersScraperTargetIDMembersUserIDRouteHandler,
  deleteScrapersScraperTargetIDOwnersUserIDRouteHandler,
  deleteScrapersScraperTargetIDRouteHandler,
  deleteSourcesSourceIDRouteHandler,
  deleteStacksStackIdRouteHandler,
  deleteTasksTaskIDLabelsLabelIDRouteHandler,
  deleteTasksTaskIDMembersUserIDRouteHandler,
  deleteTasksTaskIDOwnersUserIDRouteHandler,
  deleteTasksTaskIDRouteHandler,
  deleteTasksTaskIDRunsRunIDRouteHandler,
  deleteTelegrafsTelegrafIDLabelsLabelIDRouteHandler,
  deleteTelegrafsTelegrafIDMembersUserIDRouteHandler,
  deleteTelegrafsTelegrafIDOwnersUserIDRouteHandler,
  deleteTelegrafsTelegrafIDRouteHandler,
  deleteUsersUserIDRouteHandler,
  deleteVariablesVariableIDLabelsLabelIDRouteHandler,
  deleteVariablesVariableIDRouteHandler,
  getAuthorizationsAuthIDRouteHandler,
  getAuthorizationsRouteHandler,
  getBackupKvRouteHandler,
  getBackupMetadataRouteHandler,
  getBackupShardsShardIDRouteHandler,
  getBucketsBucketIDLabelsRouteHandler,
  getBucketsBucketIDMembersRouteHandler,
  getBucketsBucketIDOwnersRouteHandler,
  getBucketsBucketIDRouteHandler,
  getBucketsRouteHandler,
  getChecksCheckIDLabelsRouteHandler,
  getChecksCheckIDQueryRouteHandler,
  getChecksCheckIDRouteHandler,
  getChecksRouteHandler,
  getConfigRouteHandler,
  getDashboardsDashboardIDCellsCellIDViewRouteHandler,
  getDashboardsDashboardIDLabelsRouteHandler,
  getDashboardsDashboardIDMembersRouteHandler,
  getDashboardsDashboardIDOwnersRouteHandler,
  getDashboardsDashboardIDRouteHandler,
  getDashboardsRouteHandler,
  getDbrpsDbrpIDRouteHandler,
  getDbrpsRouteHandler,
  getDebugPprofAllocsRouteHandler,
  getDebugPprofAllRouteHandler,
  getDebugPprofBlockRouteHandler,
  getDebugPprofCmdlineRouteHandler,
  getDebugPprofGoroutineRouteHandler,
  getDebugPprofHeapRouteHandler,
  getDebugPprofMutexRouteHandler,
  getDebugPprofProfileRouteHandler,
  getDebugPprofThreadcreateRouteHandler,
  getDebugPprofTraceRouteHandler,
  getFlagsRouteHandler,
  getHealthRouteHandler,
  getLabelsLabelIDRouteHandler,
  getLabelsRouteHandler,
  getMeRouteHandler,
  getMetricsRouteHandler,
  getNotificationEndpointsEndpointIDLabelsRouteHandler,
  getNotificationEndpointsEndpointIDRouteHandler,
  getNotificationEndpointsRouteHandler,
  getNotificationRulesRouteHandler,
  getNotificationRulesRuleIDLabelsRouteHandler,
  getNotificationRulesRuleIDQueryRouteHandler,
  getNotificationRulesRuleIDRouteHandler,
  getOrgsOrgIDMembersRouteHandler,
  getOrgsOrgIDOwnersRouteHandler,
  getOrgsOrgIDRouteHandler,
  getOrgsOrgIDSecretsRouteHandler,
  getOrgsRouteHandler,
  getPingRouteHandler,
  getQuerySuggestionsNameRouteHandler,
  getQuerySuggestionsRouteHandler,
  getReadyRouteHandler,
  getRemotesRemoteIDRouteHandler,
  getRemotesRouteHandler,
  getReplicationsReplicationIDRouteHandler,
  getReplicationsRouteHandler,
  getResourcesRouteHandler,
  getRouteHandler,
  getScrapersRouteHandler,
  getScrapersScraperTargetIDLabelsRouteHandler,
  getScrapersScraperTargetIDMembersRouteHandler,
  getScrapersScraperTargetIDOwnersRouteHandler,
  getScrapersScraperTargetIDRouteHandler,
  getSetupRouteHandler,
  getSourcesRouteHandler,
  getSourcesSourceIDBucketsRouteHandler,
  getSourcesSourceIDHealthRouteHandler,
  getSourcesSourceIDRouteHandler,
  getStacksRouteHandler,
  getStacksStackIdRouteHandler,
  getTasksRouteHandler,
  getTasksTaskIDLabelsRouteHandler,
  getTasksTaskIDLogsRouteHandler,
  getTasksTaskIDMembersRouteHandler,
  getTasksTaskIDOwnersRouteHandler,
  getTasksTaskIDRouteHandler,
  getTasksTaskIDRunsRouteHandler,
  getTasksTaskIDRunsRunIDLogsRouteHandler,
  getTasksTaskIDRunsRunIDRouteHandler,
  getTelegrafPluginsRouteHandler,
  getTelegrafsRouteHandler,
  getTelegrafsTelegrafIDLabelsRouteHandler,
  getTelegrafsTelegrafIDMembersRouteHandler,
  getTelegrafsTelegrafIDOwnersRouteHandler,
  getTelegrafsTelegrafIDRouteHandler,
  getUsersRouteHandler,
  getUsersUserIDRouteHandler,
  getVariablesRouteHandler,
  getVariablesVariableIDLabelsRouteHandler,
  getVariablesVariableIDRouteHandler,
  headPingRouteHandler,
  patchAuthorizationsAuthIDRouteHandler,
  patchBucketsBucketIDRouteHandler,
  patchChecksCheckIDRouteHandler,
  patchDashboardsDashboardIDCellsCellIDRouteHandler,
  patchDashboardsDashboardIDCellsCellIDViewRouteHandler,
  patchDashboardsDashboardIDRouteHandler,
  patchDbrpsDbrpIDRouteHandler,
  patchLabelsLabelIDRouteHandler,
  patchNotificationEndpointsEndpointIDRouteHandler,
  patchNotificationRulesRuleIDRouteHandler,
  patchOrgsOrgIDRouteHandler,
  patchOrgsOrgIDSecretsRouteHandler,
  patchRemotesRemoteIDRouteHandler,
  patchReplicationsReplicationIDRouteHandler,
  patchScrapersScraperTargetIDRouteHandler,
  patchSourcesSourceIDRouteHandler,
  patchStacksStackIdRouteHandler,
  patchTasksTaskIDRouteHandler,
  patchUsersUserIDRouteHandler,
  patchVariablesVariableIDRouteHandler,
  postAuthorizationsRouteHandler,
  postBucketsBucketIDLabelsRouteHandler,
  postBucketsBucketIDMembersRouteHandler,
  postBucketsBucketIDOwnersRouteHandler,
  postBucketsRouteHandler,
  postChecksCheckIDLabelsRouteHandler,
  postChecksRouteHandler,
  postDashboardsDashboardIDCellsRouteHandler,
  postDashboardsDashboardIDLabelsRouteHandler,
  postDashboardsDashboardIDMembersRouteHandler,
  postDashboardsDashboardIDOwnersRouteHandler,
  postDashboardsRouteHandler,
  postDbrpsRouteHandler,
  postDeleteRouteHandler,
  postLabelsRouteHandler,
  postNotificationEndpointsEndpointIDLabelsRouteHandler,
  postNotificationEndpointsRouteHandler,
  postNotificationRulesRouteHandler,
  postNotificationRulesRuleIDLabelsRouteHandler,
  postOrgsOrgIDMembersRouteHandler,
  postOrgsOrgIDOwnersRouteHandler,
  postOrgsOrgIDSecretsDeleteRouteHandler,
  postOrgsRouteHandler,
  postQueryAnalyzeRouteHandler,
  postQueryAstRouteHandler,
  postQueryRouteHandler,
  postRemotesRouteHandler,
  postReplicationsReplicationIDValidateRouteHandler,
  postReplicationsRouteHandler,
  postRestoreBucketBucketIDRouteHandler,
  postRestoreBucketMetadataRouteHandler,
  postRestoreKvRouteHandler,
  postRestoreShardsShardIDRouteHandler,
  postRestoreSqlRouteHandler,
  postScrapersRouteHandler,
  postScrapersScraperTargetIDLabelsRouteHandler,
  postScrapersScraperTargetIDMembersRouteHandler,
  postScrapersScraperTargetIDOwnersRouteHandler,
  postSetupRouteHandler,
  postSigninRouteHandler,
  postSignoutRouteHandler,
  postSourcesRouteHandler,
  postStacksRouteHandler,
  postStacksStackIdUninstallRouteHandler,
  postTasksRouteHandler,
  postTasksTaskIDLabelsRouteHandler,
  postTasksTaskIDMembersRouteHandler,
  postTasksTaskIDOwnersRouteHandler,
  postTasksTaskIDRunsRouteHandler,
  postTasksTaskIDRunsRunIDRetryRouteHandler,
  postTelegrafsRouteHandler,
  postTelegrafsTelegrafIDLabelsRouteHandler,
  postTelegrafsTelegrafIDMembersRouteHandler,
  postTelegrafsTelegrafIDOwnersRouteHandler,
  postTemplatesApplyRouteHandler,
  postTemplatesExportRouteHandler,
  postUsersRouteHandler,
  postUsersUserIDPasswordRouteHandler,
  postVariablesRouteHandler,
  postVariablesVariableIDLabelsRouteHandler,
  postWriteRouteHandler,
  putChecksCheckIDRouteHandler,
  putDashboardsDashboardIDCellsRouteHandler,
  putMePasswordRouteHandler,
  putNotificationEndpointsEndpointIDRouteHandler,
  putNotificationRulesRuleIDRouteHandler,
  putTelegrafsTelegrafIDRouteHandler,
  putUsersUserIDPasswordRouteHandler,
  putVariablesVariableIDRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postSigninRoute, postSigninRouteHandler)
  .openapi(postSignoutRoute, postSignoutRouteHandler)
  .openapi(getPingRoute, getPingRouteHandler)
  .openapi(headPingRoute, headPingRouteHandler)
  .openapi(getRoute, getRouteHandler)
  .openapi(getDbrpsRoute, getDbrpsRouteHandler)
  .openapi(postDbrpsRoute, postDbrpsRouteHandler)
  .openapi(getDbrpsDbrpIDRoute, getDbrpsDbrpIDRouteHandler)
  .openapi(patchDbrpsDbrpIDRoute, patchDbrpsDbrpIDRouteHandler)
  .openapi(deleteDbrpsDbrpIDRoute, deleteDbrpsDbrpIDRouteHandler)
  .openapi(getTelegrafPluginsRoute, getTelegrafPluginsRouteHandler)
  .openapi(getTelegrafsRoute, getTelegrafsRouteHandler)
  .openapi(postTelegrafsRoute, postTelegrafsRouteHandler)
  .openapi(getTelegrafsTelegrafIDRoute, getTelegrafsTelegrafIDRouteHandler)
  .openapi(putTelegrafsTelegrafIDRoute, putTelegrafsTelegrafIDRouteHandler)
  .openapi(deleteTelegrafsTelegrafIDRoute, deleteTelegrafsTelegrafIDRouteHandler)
  .openapi(getTelegrafsTelegrafIDLabelsRoute, getTelegrafsTelegrafIDLabelsRouteHandler)
  .openapi(postTelegrafsTelegrafIDLabelsRoute, postTelegrafsTelegrafIDLabelsRouteHandler)
  .openapi(
    deleteTelegrafsTelegrafIDLabelsLabelIDRoute,
    deleteTelegrafsTelegrafIDLabelsLabelIDRouteHandler,
  )
  .openapi(getTelegrafsTelegrafIDMembersRoute, getTelegrafsTelegrafIDMembersRouteHandler)
  .openapi(postTelegrafsTelegrafIDMembersRoute, postTelegrafsTelegrafIDMembersRouteHandler)
  .openapi(
    deleteTelegrafsTelegrafIDMembersUserIDRoute,
    deleteTelegrafsTelegrafIDMembersUserIDRouteHandler,
  )
  .openapi(getTelegrafsTelegrafIDOwnersRoute, getTelegrafsTelegrafIDOwnersRouteHandler)
  .openapi(postTelegrafsTelegrafIDOwnersRoute, postTelegrafsTelegrafIDOwnersRouteHandler)
  .openapi(
    deleteTelegrafsTelegrafIDOwnersUserIDRoute,
    deleteTelegrafsTelegrafIDOwnersUserIDRouteHandler,
  )
  .openapi(getVariablesVariableIDLabelsRoute, getVariablesVariableIDLabelsRouteHandler)
  .openapi(postVariablesVariableIDLabelsRoute, postVariablesVariableIDLabelsRouteHandler)
  .openapi(
    deleteVariablesVariableIDLabelsLabelIDRoute,
    deleteVariablesVariableIDLabelsLabelIDRouteHandler,
  )
  .openapi(postWriteRoute, postWriteRouteHandler)
  .openapi(postDeleteRoute, postDeleteRouteHandler)
  .openapi(postLabelsRoute, postLabelsRouteHandler)
  .openapi(getLabelsRoute, getLabelsRouteHandler)
  .openapi(getLabelsLabelIDRoute, getLabelsLabelIDRouteHandler)
  .openapi(patchLabelsLabelIDRoute, patchLabelsLabelIDRouteHandler)
  .openapi(deleteLabelsLabelIDRoute, deleteLabelsLabelIDRouteHandler)
  .openapi(getDashboardsDashboardIDRoute, getDashboardsDashboardIDRouteHandler)
  .openapi(patchDashboardsDashboardIDRoute, patchDashboardsDashboardIDRouteHandler)
  .openapi(deleteDashboardsDashboardIDRoute, deleteDashboardsDashboardIDRouteHandler)
  .openapi(putDashboardsDashboardIDCellsRoute, putDashboardsDashboardIDCellsRouteHandler)
  .openapi(postDashboardsDashboardIDCellsRoute, postDashboardsDashboardIDCellsRouteHandler)
  .openapi(
    patchDashboardsDashboardIDCellsCellIDRoute,
    patchDashboardsDashboardIDCellsCellIDRouteHandler,
  )
  .openapi(
    deleteDashboardsDashboardIDCellsCellIDRoute,
    deleteDashboardsDashboardIDCellsCellIDRouteHandler,
  )
  .openapi(
    getDashboardsDashboardIDCellsCellIDViewRoute,
    getDashboardsDashboardIDCellsCellIDViewRouteHandler,
  )
  .openapi(
    patchDashboardsDashboardIDCellsCellIDViewRoute,
    patchDashboardsDashboardIDCellsCellIDViewRouteHandler,
  )
  .openapi(getDashboardsDashboardIDLabelsRoute, getDashboardsDashboardIDLabelsRouteHandler)
  .openapi(postDashboardsDashboardIDLabelsRoute, postDashboardsDashboardIDLabelsRouteHandler)
  .openapi(
    deleteDashboardsDashboardIDLabelsLabelIDRoute,
    deleteDashboardsDashboardIDLabelsLabelIDRouteHandler,
  )
  .openapi(getDashboardsDashboardIDMembersRoute, getDashboardsDashboardIDMembersRouteHandler)
  .openapi(postDashboardsDashboardIDMembersRoute, postDashboardsDashboardIDMembersRouteHandler)
  .openapi(
    deleteDashboardsDashboardIDMembersUserIDRoute,
    deleteDashboardsDashboardIDMembersUserIDRouteHandler,
  )
  .openapi(getDashboardsDashboardIDOwnersRoute, getDashboardsDashboardIDOwnersRouteHandler)
  .openapi(postDashboardsDashboardIDOwnersRoute, postDashboardsDashboardIDOwnersRouteHandler)
  .openapi(
    deleteDashboardsDashboardIDOwnersUserIDRoute,
    deleteDashboardsDashboardIDOwnersUserIDRouteHandler,
  )
  .openapi(postQueryAstRoute, postQueryAstRouteHandler)
  .openapi(getQuerySuggestionsRoute, getQuerySuggestionsRouteHandler)
  .openapi(getQuerySuggestionsNameRoute, getQuerySuggestionsNameRouteHandler)
  .openapi(postQueryAnalyzeRoute, postQueryAnalyzeRouteHandler)
  .openapi(postQueryRoute, postQueryRouteHandler)
  .openapi(getBucketsRoute, getBucketsRouteHandler)
  .openapi(postBucketsRoute, postBucketsRouteHandler)
  .openapi(getBucketsBucketIDRoute, getBucketsBucketIDRouteHandler)
  .openapi(patchBucketsBucketIDRoute, patchBucketsBucketIDRouteHandler)
  .openapi(deleteBucketsBucketIDRoute, deleteBucketsBucketIDRouteHandler)
  .openapi(getBucketsBucketIDLabelsRoute, getBucketsBucketIDLabelsRouteHandler)
  .openapi(postBucketsBucketIDLabelsRoute, postBucketsBucketIDLabelsRouteHandler)
  .openapi(deleteBucketsBucketIDLabelsLabelIDRoute, deleteBucketsBucketIDLabelsLabelIDRouteHandler)
  .openapi(getBucketsBucketIDMembersRoute, getBucketsBucketIDMembersRouteHandler)
  .openapi(postBucketsBucketIDMembersRoute, postBucketsBucketIDMembersRouteHandler)
  .openapi(deleteBucketsBucketIDMembersUserIDRoute, deleteBucketsBucketIDMembersUserIDRouteHandler)
  .openapi(getBucketsBucketIDOwnersRoute, getBucketsBucketIDOwnersRouteHandler)
  .openapi(postBucketsBucketIDOwnersRoute, postBucketsBucketIDOwnersRouteHandler)
  .openapi(deleteBucketsBucketIDOwnersUserIDRoute, deleteBucketsBucketIDOwnersUserIDRouteHandler)
  .openapi(getOrgsRoute, getOrgsRouteHandler)
  .openapi(postOrgsRoute, postOrgsRouteHandler)
  .openapi(getOrgsOrgIDRoute, getOrgsOrgIDRouteHandler)
  .openapi(patchOrgsOrgIDRoute, patchOrgsOrgIDRouteHandler)
  .openapi(deleteOrgsOrgIDRoute, deleteOrgsOrgIDRouteHandler)
  .openapi(getOrgsOrgIDSecretsRoute, getOrgsOrgIDSecretsRouteHandler)
  .openapi(patchOrgsOrgIDSecretsRoute, patchOrgsOrgIDSecretsRouteHandler)
  .openapi(getOrgsOrgIDMembersRoute, getOrgsOrgIDMembersRouteHandler)
  .openapi(postOrgsOrgIDMembersRoute, postOrgsOrgIDMembersRouteHandler)
  .openapi(deleteOrgsOrgIDMembersUserIDRoute, deleteOrgsOrgIDMembersUserIDRouteHandler)
  .openapi(getOrgsOrgIDOwnersRoute, getOrgsOrgIDOwnersRouteHandler)
  .openapi(postOrgsOrgIDOwnersRoute, postOrgsOrgIDOwnersRouteHandler)
  .openapi(deleteOrgsOrgIDOwnersUserIDRoute, deleteOrgsOrgIDOwnersUserIDRouteHandler)
  .openapi(postOrgsOrgIDSecretsDeleteRoute, postOrgsOrgIDSecretsDeleteRouteHandler)
  .openapi(deleteOrgsOrgIDSecretsSecretIDRoute, deleteOrgsOrgIDSecretsSecretIDRouteHandler)
  .openapi(getResourcesRoute, getResourcesRouteHandler)
  .openapi(getStacksRoute, getStacksRouteHandler)
  .openapi(postStacksRoute, postStacksRouteHandler)
  .openapi(getStacksStackIdRoute, getStacksStackIdRouteHandler)
  .openapi(patchStacksStackIdRoute, patchStacksStackIdRouteHandler)
  .openapi(deleteStacksStackIdRoute, deleteStacksStackIdRouteHandler)
  .openapi(postStacksStackIdUninstallRoute, postStacksStackIdUninstallRouteHandler)
  .openapi(postTemplatesApplyRoute, postTemplatesApplyRouteHandler)
  .openapi(postTemplatesExportRoute, postTemplatesExportRouteHandler)
  .openapi(getTasksTaskIDRunsRoute, getTasksTaskIDRunsRouteHandler)
  .openapi(postTasksTaskIDRunsRoute, postTasksTaskIDRunsRouteHandler)
  .openapi(getTasksTaskIDRunsRunIDRoute, getTasksTaskIDRunsRunIDRouteHandler)
  .openapi(deleteTasksTaskIDRunsRunIDRoute, deleteTasksTaskIDRunsRunIDRouteHandler)
  .openapi(postTasksTaskIDRunsRunIDRetryRoute, postTasksTaskIDRunsRunIDRetryRouteHandler)
  .openapi(getTasksTaskIDLogsRoute, getTasksTaskIDLogsRouteHandler)
  .openapi(getTasksTaskIDRunsRunIDLogsRoute, getTasksTaskIDRunsRunIDLogsRouteHandler)
  .openapi(getTasksTaskIDLabelsRoute, getTasksTaskIDLabelsRouteHandler)
  .openapi(postTasksTaskIDLabelsRoute, postTasksTaskIDLabelsRouteHandler)
  .openapi(deleteTasksTaskIDLabelsLabelIDRoute, deleteTasksTaskIDLabelsLabelIDRouteHandler)
  .openapi(getFlagsRoute, getFlagsRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(putMePasswordRoute, putMePasswordRouteHandler)
  .openapi(getTasksTaskIDMembersRoute, getTasksTaskIDMembersRouteHandler)
  .openapi(postTasksTaskIDMembersRoute, postTasksTaskIDMembersRouteHandler)
  .openapi(deleteTasksTaskIDMembersUserIDRoute, deleteTasksTaskIDMembersUserIDRouteHandler)
  .openapi(getTasksTaskIDOwnersRoute, getTasksTaskIDOwnersRouteHandler)
  .openapi(postTasksTaskIDOwnersRoute, postTasksTaskIDOwnersRouteHandler)
  .openapi(deleteTasksTaskIDOwnersUserIDRoute, deleteTasksTaskIDOwnersUserIDRouteHandler)
  .openapi(postUsersUserIDPasswordRoute, postUsersUserIDPasswordRouteHandler)
  .openapi(putUsersUserIDPasswordRoute, putUsersUserIDPasswordRouteHandler)
  .openapi(getChecksRoute, getChecksRouteHandler)
  .openapi(postChecksRoute, postChecksRouteHandler)
  .openapi(getChecksCheckIDRoute, getChecksCheckIDRouteHandler)
  .openapi(putChecksCheckIDRoute, putChecksCheckIDRouteHandler)
  .openapi(patchChecksCheckIDRoute, patchChecksCheckIDRouteHandler)
  .openapi(deleteChecksCheckIDRoute, deleteChecksCheckIDRouteHandler)
  .openapi(getChecksCheckIDLabelsRoute, getChecksCheckIDLabelsRouteHandler)
  .openapi(postChecksCheckIDLabelsRoute, postChecksCheckIDLabelsRouteHandler)
  .openapi(deleteChecksCheckIDLabelsLabelIDRoute, deleteChecksCheckIDLabelsLabelIDRouteHandler)
  .openapi(getNotificationRulesRoute, getNotificationRulesRouteHandler)
  .openapi(postNotificationRulesRoute, postNotificationRulesRouteHandler)
  .openapi(getChecksCheckIDQueryRoute, getChecksCheckIDQueryRouteHandler)
  .openapi(getNotificationRulesRuleIDRoute, getNotificationRulesRuleIDRouteHandler)
  .openapi(putNotificationRulesRuleIDRoute, putNotificationRulesRuleIDRouteHandler)
  .openapi(patchNotificationRulesRuleIDRoute, patchNotificationRulesRuleIDRouteHandler)
  .openapi(deleteNotificationRulesRuleIDRoute, deleteNotificationRulesRuleIDRouteHandler)
  .openapi(getNotificationRulesRuleIDLabelsRoute, getNotificationRulesRuleIDLabelsRouteHandler)
  .openapi(postNotificationRulesRuleIDLabelsRoute, postNotificationRulesRuleIDLabelsRouteHandler)
  .openapi(
    deleteNotificationRulesRuleIDLabelsLabelIDRoute,
    deleteNotificationRulesRuleIDLabelsLabelIDRouteHandler,
  )
  .openapi(getNotificationRulesRuleIDQueryRoute, getNotificationRulesRuleIDQueryRouteHandler)
  .openapi(getNotificationEndpointsRoute, getNotificationEndpointsRouteHandler)
  .openapi(postNotificationEndpointsRoute, postNotificationEndpointsRouteHandler)
  .openapi(getNotificationEndpointsEndpointIDRoute, getNotificationEndpointsEndpointIDRouteHandler)
  .openapi(putNotificationEndpointsEndpointIDRoute, putNotificationEndpointsEndpointIDRouteHandler)
  .openapi(
    patchNotificationEndpointsEndpointIDRoute,
    patchNotificationEndpointsEndpointIDRouteHandler,
  )
  .openapi(
    deleteNotificationEndpointsEndpointIDRoute,
    deleteNotificationEndpointsEndpointIDRouteHandler,
  )
  .openapi(
    getNotificationEndpointsEndpointIDLabelsRoute,
    getNotificationEndpointsEndpointIDLabelsRouteHandler,
  )
  .openapi(
    postNotificationEndpointsEndpointIDLabelsRoute,
    postNotificationEndpointsEndpointIDLabelsRouteHandler,
  )
  .openapi(
    deleteNotificationEndpointsEndpointIDLabelsLabelIDRoute,
    deleteNotificationEndpointsEndpointIDLabelsLabelIDRouteHandler,
  )
  .openapi(getAuthorizationsRoute, getAuthorizationsRouteHandler)
  .openapi(postAuthorizationsRoute, postAuthorizationsRouteHandler)
  .openapi(getAuthorizationsAuthIDRoute, getAuthorizationsAuthIDRouteHandler)
  .openapi(patchAuthorizationsAuthIDRoute, patchAuthorizationsAuthIDRouteHandler)
  .openapi(deleteAuthorizationsAuthIDRoute, deleteAuthorizationsAuthIDRouteHandler)
  .openapi(getDebugPprofAllRoute, getDebugPprofAllRouteHandler)
  .openapi(getDebugPprofAllocsRoute, getDebugPprofAllocsRouteHandler)
  .openapi(getDebugPprofBlockRoute, getDebugPprofBlockRouteHandler)
  .openapi(getDebugPprofCmdlineRoute, getDebugPprofCmdlineRouteHandler)
  .openapi(getDebugPprofGoroutineRoute, getDebugPprofGoroutineRouteHandler)
  .openapi(getDebugPprofHeapRoute, getDebugPprofHeapRouteHandler)
  .openapi(getDebugPprofMutexRoute, getDebugPprofMutexRouteHandler)
  .openapi(getDebugPprofProfileRoute, getDebugPprofProfileRouteHandler)
  .openapi(getDebugPprofThreadcreateRoute, getDebugPprofThreadcreateRouteHandler)
  .openapi(getDebugPprofTraceRoute, getDebugPprofTraceRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(getReadyRoute, getReadyRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersUserIDRoute, getUsersUserIDRouteHandler)
  .openapi(patchUsersUserIDRoute, patchUsersUserIDRouteHandler)
  .openapi(deleteUsersUserIDRoute, deleteUsersUserIDRouteHandler)
  .openapi(getSetupRoute, getSetupRouteHandler)
  .openapi(postSetupRoute, postSetupRouteHandler)
  .openapi(getVariablesRoute, getVariablesRouteHandler)
  .openapi(postVariablesRoute, postVariablesRouteHandler)
  .openapi(getVariablesVariableIDRoute, getVariablesVariableIDRouteHandler)
  .openapi(deleteVariablesVariableIDRoute, deleteVariablesVariableIDRouteHandler)
  .openapi(patchVariablesVariableIDRoute, patchVariablesVariableIDRouteHandler)
  .openapi(putVariablesVariableIDRoute, putVariablesVariableIDRouteHandler)
  .openapi(postSourcesRoute, postSourcesRouteHandler)
  .openapi(getSourcesRoute, getSourcesRouteHandler)
  .openapi(deleteSourcesSourceIDRoute, deleteSourcesSourceIDRouteHandler)
  .openapi(patchSourcesSourceIDRoute, patchSourcesSourceIDRouteHandler)
  .openapi(getSourcesSourceIDRoute, getSourcesSourceIDRouteHandler)
  .openapi(getSourcesSourceIDHealthRoute, getSourcesSourceIDHealthRouteHandler)
  .openapi(getSourcesSourceIDBucketsRoute, getSourcesSourceIDBucketsRouteHandler)
  .openapi(getScrapersRoute, getScrapersRouteHandler)
  .openapi(postScrapersRoute, postScrapersRouteHandler)
  .openapi(getScrapersScraperTargetIDRoute, getScrapersScraperTargetIDRouteHandler)
  .openapi(deleteScrapersScraperTargetIDRoute, deleteScrapersScraperTargetIDRouteHandler)
  .openapi(patchScrapersScraperTargetIDRoute, patchScrapersScraperTargetIDRouteHandler)
  .openapi(getScrapersScraperTargetIDLabelsRoute, getScrapersScraperTargetIDLabelsRouteHandler)
  .openapi(postScrapersScraperTargetIDLabelsRoute, postScrapersScraperTargetIDLabelsRouteHandler)
  .openapi(
    deleteScrapersScraperTargetIDLabelsLabelIDRoute,
    deleteScrapersScraperTargetIDLabelsLabelIDRouteHandler,
  )
  .openapi(getScrapersScraperTargetIDMembersRoute, getScrapersScraperTargetIDMembersRouteHandler)
  .openapi(postScrapersScraperTargetIDMembersRoute, postScrapersScraperTargetIDMembersRouteHandler)
  .openapi(
    deleteScrapersScraperTargetIDMembersUserIDRoute,
    deleteScrapersScraperTargetIDMembersUserIDRouteHandler,
  )
  .openapi(getScrapersScraperTargetIDOwnersRoute, getScrapersScraperTargetIDOwnersRouteHandler)
  .openapi(postScrapersScraperTargetIDOwnersRoute, postScrapersScraperTargetIDOwnersRouteHandler)
  .openapi(
    deleteScrapersScraperTargetIDOwnersUserIDRoute,
    deleteScrapersScraperTargetIDOwnersUserIDRouteHandler,
  )
  .openapi(getBackupKvRoute, getBackupKvRouteHandler)
  .openapi(getBackupMetadataRoute, getBackupMetadataRouteHandler)
  .openapi(getBackupShardsShardIDRoute, getBackupShardsShardIDRouteHandler)
  .openapi(postRestoreKvRoute, postRestoreKvRouteHandler)
  .openapi(postRestoreSqlRoute, postRestoreSqlRouteHandler)
  .openapi(postRestoreBucketBucketIDRoute, postRestoreBucketBucketIDRouteHandler)
  .openapi(postRestoreBucketMetadataRoute, postRestoreBucketMetadataRouteHandler)
  .openapi(postRestoreShardsShardIDRoute, postRestoreShardsShardIDRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getRemotesRoute, getRemotesRouteHandler)
  .openapi(postRemotesRoute, postRemotesRouteHandler)
  .openapi(getRemotesRemoteIDRoute, getRemotesRemoteIDRouteHandler)
  .openapi(patchRemotesRemoteIDRoute, patchRemotesRemoteIDRouteHandler)
  .openapi(deleteRemotesRemoteIDRoute, deleteRemotesRemoteIDRouteHandler)
  .openapi(getReplicationsRoute, getReplicationsRouteHandler)
  .openapi(postReplicationsRoute, postReplicationsRouteHandler)
  .openapi(getReplicationsReplicationIDRoute, getReplicationsReplicationIDRouteHandler)
  .openapi(patchReplicationsReplicationIDRoute, patchReplicationsReplicationIDRouteHandler)
  .openapi(deleteReplicationsReplicationIDRoute, deleteReplicationsReplicationIDRouteHandler)
  .openapi(
    postReplicationsReplicationIDValidateRoute,
    postReplicationsReplicationIDValidateRouteHandler,
  )
  .openapi(postDashboardsRoute, postDashboardsRouteHandler)
  .openapi(getDashboardsRoute, getDashboardsRouteHandler)
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(postTasksRoute, postTasksRouteHandler)
  .openapi(getTasksTaskIDRoute, getTasksTaskIDRouteHandler)
  .openapi(patchTasksTaskIDRoute, patchTasksTaskIDRouteHandler)
  .openapi(deleteTasksTaskIDRoute, deleteTasksTaskIDRouteHandler)

export default app
