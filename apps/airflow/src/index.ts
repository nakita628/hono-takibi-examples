import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AssetsAssetIdQueuedEventsRoute,
  deleteApiV2AssetsAssetIdStateStoreKeyRoute,
  deleteApiV2AssetsAssetIdStateStoreRoute,
  deleteApiV2ConnectionsConnectionIdRoute,
  deleteApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute,
  deleteApiV2DagsDagIdAssetsQueuedEventsRoute,
  deleteApiV2DagsDagIdDagRunsDagRunIdRoute,
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute,
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
  deleteApiV2DagsDagIdRoute,
  deleteApiV2PoolsPoolNameRoute,
  deleteApiV2VariablesVariableKeyRoute,
  getApiV2AssetsAliasesAssetAliasIdRoute,
  getApiV2AssetsAliasesRoute,
  getApiV2AssetsAssetIdQueuedEventsRoute,
  getApiV2AssetsAssetIdRoute,
  getApiV2AssetsAssetIdStateStoreKeyRoute,
  getApiV2AssetsAssetIdStateStoreRoute,
  getApiV2AssetsEventsRoute,
  getApiV2AssetsRoute,
  getApiV2AuthCliMetadataRoute,
  getApiV2AuthLoginRoute,
  getApiV2AuthLogoutRoute,
  getApiV2BackfillsBackfillIdDagRunsRoute,
  getApiV2BackfillsBackfillIdRoute,
  getApiV2BackfillsRoute,
  getApiV2ConfigRoute,
  getApiV2ConfigSectionSectionOptionOptionRoute,
  getApiV2ConnectionsConnectionIdRoute,
  getApiV2ConnectionsEnqueueTestRoute,
  getApiV2ConnectionsRoute,
  getApiV2DagBundlesBundleNameFilesRoute,
  getApiV2DagBundlesBundleNameRoute,
  getApiV2DagBundlesRoute,
  getApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute,
  getApiV2DagsDagIdAssetsQueuedEventsRoute,
  getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsRoute,
  getApiV2DagsDagIdDagRunsDagRunIdRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
  getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsRoute,
  getApiV2DagsDagIdDagRunsDagRunIdWaitRoute,
  getApiV2DagsDagIdDagRunsRoute,
  getApiV2DagsDagIdDagVersionsDiffRoute,
  getApiV2DagsDagIdDagVersionsRoute,
  getApiV2DagsDagIdDagVersionsVersionNumberRoute,
  getApiV2DagsDagIdDetailsRoute,
  getApiV2DagsDagIdRoute,
  getApiV2DagsDagIdTasksRoute,
  getApiV2DagsDagIdTasksTaskIdRoute,
  getApiV2DagSourcesDagIdRoute,
  getApiV2DagsRoute,
  getApiV2DagStatsRoute,
  getApiV2DagTagsRoute,
  getApiV2DagWarningsRoute,
  getApiV2EventLogsEventLogIdRoute,
  getApiV2EventLogsRoute,
  getApiV2ImportErrorsImportErrorIdRoute,
  getApiV2ImportErrorsRoute,
  getApiV2JobsRoute,
  getApiV2MonitorHealthRoute,
  getApiV2PluginsImportErrorsRoute,
  getApiV2PluginsRoute,
  getApiV2PoolsPoolNameRoute,
  getApiV2PoolsRoute,
  getApiV2ProvidersProviderNameRoute,
  getApiV2ProvidersRoute,
  getApiV2TriggersRoute,
  getApiV2TriggersTriggerIdRoute,
  getApiV2VariablesRoute,
  getApiV2VariablesVariableKeyRoute,
  getApiV2VersionRoute,
  patchApiV2ConnectionsConnectionIdRoute,
  patchApiV2ConnectionsRoute,
  patchApiV2DagsBulkRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
  patchApiV2DagsDagIdDagRunsRoute,
  patchApiV2DagsDagIdRoute,
  patchApiV2DagsRoute,
  patchApiV2PoolsPoolNameRoute,
  patchApiV2PoolsRoute,
  patchApiV2VariablesRoute,
  patchApiV2VariablesVariableKeyRoute,
  postApiV2AssetsAssetIdMaterializeRoute,
  postApiV2AssetsEventsRoute,
  postApiV2BackfillsDryRunRoute,
  postApiV2BackfillsRoute,
  postApiV2ConnectionsDefaultsRoute,
  postApiV2ConnectionsEnqueueTestRoute,
  postApiV2ConnectionsRoute,
  postApiV2ConnectionsTestRoute,
  postApiV2DagsDagIdClearDagRunsRoute,
  postApiV2DagsDagIdClearPartitionsRoute,
  postApiV2DagsDagIdClearTaskInstancesRoute,
  postApiV2DagsDagIdDagRunsDagRunIdClearRoute,
  postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListRoute,
  postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute,
  postApiV2DagsDagIdDagRunsListRoute,
  postApiV2DagsDagIdDagRunsRoute,
  postApiV2DagsDagIdFavoriteRoute,
  postApiV2DagsDagIdUnfavoriteRoute,
  postApiV2PoolsRoute,
  postApiV2VariablesRoute,
  putApiV2AssetsAssetIdStateStoreKeyRoute,
  putApiV2BackfillsBackfillIdCancelRoute,
  putApiV2BackfillsBackfillIdPauseRoute,
  putApiV2BackfillsBackfillIdUnpauseRoute,
  putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
  putApiV2ParseDagFileFileTokenRoute,
} from './routes'
import {
  deleteApiV2AssetsAssetIdQueuedEventsRouteHandler,
  deleteApiV2AssetsAssetIdStateStoreKeyRouteHandler,
  deleteApiV2AssetsAssetIdStateStoreRouteHandler,
  deleteApiV2ConnectionsConnectionIdRouteHandler,
  deleteApiV2DagsDagIdAssetsAssetIdQueuedEventsRouteHandler,
  deleteApiV2DagsDagIdAssetsQueuedEventsRouteHandler,
  deleteApiV2DagsDagIdDagRunsDagRunIdRouteHandler,
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler,
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler,
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRouteHandler,
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler,
  deleteApiV2DagsDagIdRouteHandler,
  deleteApiV2PoolsPoolNameRouteHandler,
  deleteApiV2VariablesVariableKeyRouteHandler,
  getApiV2AssetsAliasesAssetAliasIdRouteHandler,
  getApiV2AssetsAliasesRouteHandler,
  getApiV2AssetsAssetIdQueuedEventsRouteHandler,
  getApiV2AssetsAssetIdRouteHandler,
  getApiV2AssetsAssetIdStateStoreKeyRouteHandler,
  getApiV2AssetsAssetIdStateStoreRouteHandler,
  getApiV2AssetsEventsRouteHandler,
  getApiV2AssetsRouteHandler,
  getApiV2AuthCliMetadataRouteHandler,
  getApiV2AuthLoginRouteHandler,
  getApiV2AuthLogoutRouteHandler,
  getApiV2BackfillsBackfillIdDagRunsRouteHandler,
  getApiV2BackfillsBackfillIdRouteHandler,
  getApiV2BackfillsRouteHandler,
  getApiV2ConfigRouteHandler,
  getApiV2ConfigSectionSectionOptionOptionRouteHandler,
  getApiV2ConnectionsConnectionIdRouteHandler,
  getApiV2ConnectionsEnqueueTestRouteHandler,
  getApiV2ConnectionsRouteHandler,
  getApiV2DagBundlesBundleNameFilesRouteHandler,
  getApiV2DagBundlesBundleNameRouteHandler,
  getApiV2DagBundlesRouteHandler,
  getApiV2DagsDagIdAssetsAssetIdQueuedEventsRouteHandler,
  getApiV2DagsDagIdAssetsQueuedEventsRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsRouteHandler,
  getApiV2DagsDagIdDagRunsDagRunIdWaitRouteHandler,
  getApiV2DagsDagIdDagRunsRouteHandler,
  getApiV2DagsDagIdDagVersionsDiffRouteHandler,
  getApiV2DagsDagIdDagVersionsRouteHandler,
  getApiV2DagsDagIdDagVersionsVersionNumberRouteHandler,
  getApiV2DagsDagIdDetailsRouteHandler,
  getApiV2DagsDagIdRouteHandler,
  getApiV2DagsDagIdTasksRouteHandler,
  getApiV2DagsDagIdTasksTaskIdRouteHandler,
  getApiV2DagSourcesDagIdRouteHandler,
  getApiV2DagsRouteHandler,
  getApiV2DagStatsRouteHandler,
  getApiV2DagTagsRouteHandler,
  getApiV2DagWarningsRouteHandler,
  getApiV2EventLogsEventLogIdRouteHandler,
  getApiV2EventLogsRouteHandler,
  getApiV2ImportErrorsImportErrorIdRouteHandler,
  getApiV2ImportErrorsRouteHandler,
  getApiV2JobsRouteHandler,
  getApiV2MonitorHealthRouteHandler,
  getApiV2PluginsImportErrorsRouteHandler,
  getApiV2PluginsRouteHandler,
  getApiV2PoolsPoolNameRouteHandler,
  getApiV2PoolsRouteHandler,
  getApiV2ProvidersProviderNameRouteHandler,
  getApiV2ProvidersRouteHandler,
  getApiV2TriggersRouteHandler,
  getApiV2TriggersTriggerIdRouteHandler,
  getApiV2VariablesRouteHandler,
  getApiV2VariablesVariableKeyRouteHandler,
  getApiV2VersionRouteHandler,
  patchApiV2ConnectionsConnectionIdRouteHandler,
  patchApiV2ConnectionsRouteHandler,
  patchApiV2DagsBulkRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler,
  patchApiV2DagsDagIdDagRunsRouteHandler,
  patchApiV2DagsDagIdRouteHandler,
  patchApiV2DagsRouteHandler,
  patchApiV2PoolsPoolNameRouteHandler,
  patchApiV2PoolsRouteHandler,
  patchApiV2VariablesRouteHandler,
  patchApiV2VariablesVariableKeyRouteHandler,
  postApiV2AssetsAssetIdMaterializeRouteHandler,
  postApiV2AssetsEventsRouteHandler,
  postApiV2BackfillsDryRunRouteHandler,
  postApiV2BackfillsRouteHandler,
  postApiV2ConnectionsDefaultsRouteHandler,
  postApiV2ConnectionsEnqueueTestRouteHandler,
  postApiV2ConnectionsRouteHandler,
  postApiV2ConnectionsTestRouteHandler,
  postApiV2DagsDagIdClearDagRunsRouteHandler,
  postApiV2DagsDagIdClearPartitionsRouteHandler,
  postApiV2DagsDagIdClearTaskInstancesRouteHandler,
  postApiV2DagsDagIdDagRunsDagRunIdClearRouteHandler,
  postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListRouteHandler,
  postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRouteHandler,
  postApiV2DagsDagIdDagRunsListRouteHandler,
  postApiV2DagsDagIdDagRunsRouteHandler,
  postApiV2DagsDagIdFavoriteRouteHandler,
  postApiV2DagsDagIdUnfavoriteRouteHandler,
  postApiV2PoolsRouteHandler,
  postApiV2VariablesRouteHandler,
  putApiV2AssetsAssetIdStateStoreKeyRouteHandler,
  putApiV2BackfillsBackfillIdCancelRouteHandler,
  putApiV2BackfillsBackfillIdPauseRouteHandler,
  putApiV2BackfillsBackfillIdUnpauseRouteHandler,
  putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler,
  putApiV2ParseDagFileFileTokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV2AssetsRoute, getApiV2AssetsRouteHandler)
  .openapi(getApiV2AssetsAliasesRoute, getApiV2AssetsAliasesRouteHandler)
  .openapi(getApiV2AssetsAliasesAssetAliasIdRoute, getApiV2AssetsAliasesAssetAliasIdRouteHandler)
  .openapi(getApiV2AssetsEventsRoute, getApiV2AssetsEventsRouteHandler)
  .openapi(postApiV2AssetsEventsRoute, postApiV2AssetsEventsRouteHandler)
  .openapi(postApiV2AssetsAssetIdMaterializeRoute, postApiV2AssetsAssetIdMaterializeRouteHandler)
  .openapi(getApiV2AssetsAssetIdQueuedEventsRoute, getApiV2AssetsAssetIdQueuedEventsRouteHandler)
  .openapi(
    deleteApiV2AssetsAssetIdQueuedEventsRoute,
    deleteApiV2AssetsAssetIdQueuedEventsRouteHandler,
  )
  .openapi(getApiV2AssetsAssetIdRoute, getApiV2AssetsAssetIdRouteHandler)
  .openapi(
    getApiV2DagsDagIdAssetsQueuedEventsRoute,
    getApiV2DagsDagIdAssetsQueuedEventsRouteHandler,
  )
  .openapi(
    deleteApiV2DagsDagIdAssetsQueuedEventsRoute,
    deleteApiV2DagsDagIdAssetsQueuedEventsRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute,
    getApiV2DagsDagIdAssetsAssetIdQueuedEventsRouteHandler,
  )
  .openapi(
    deleteApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute,
    deleteApiV2DagsDagIdAssetsAssetIdQueuedEventsRouteHandler,
  )
  .openapi(getApiV2BackfillsRoute, getApiV2BackfillsRouteHandler)
  .openapi(postApiV2BackfillsRoute, postApiV2BackfillsRouteHandler)
  .openapi(getApiV2BackfillsBackfillIdRoute, getApiV2BackfillsBackfillIdRouteHandler)
  .openapi(getApiV2BackfillsBackfillIdDagRunsRoute, getApiV2BackfillsBackfillIdDagRunsRouteHandler)
  .openapi(putApiV2BackfillsBackfillIdPauseRoute, putApiV2BackfillsBackfillIdPauseRouteHandler)
  .openapi(putApiV2BackfillsBackfillIdUnpauseRoute, putApiV2BackfillsBackfillIdUnpauseRouteHandler)
  .openapi(putApiV2BackfillsBackfillIdCancelRoute, putApiV2BackfillsBackfillIdCancelRouteHandler)
  .openapi(postApiV2BackfillsDryRunRoute, postApiV2BackfillsDryRunRouteHandler)
  .openapi(deleteApiV2ConnectionsConnectionIdRoute, deleteApiV2ConnectionsConnectionIdRouteHandler)
  .openapi(getApiV2ConnectionsConnectionIdRoute, getApiV2ConnectionsConnectionIdRouteHandler)
  .openapi(patchApiV2ConnectionsConnectionIdRoute, patchApiV2ConnectionsConnectionIdRouteHandler)
  .openapi(getApiV2ConnectionsEnqueueTestRoute, getApiV2ConnectionsEnqueueTestRouteHandler)
  .openapi(postApiV2ConnectionsEnqueueTestRoute, postApiV2ConnectionsEnqueueTestRouteHandler)
  .openapi(getApiV2ConnectionsRoute, getApiV2ConnectionsRouteHandler)
  .openapi(postApiV2ConnectionsRoute, postApiV2ConnectionsRouteHandler)
  .openapi(patchApiV2ConnectionsRoute, patchApiV2ConnectionsRouteHandler)
  .openapi(postApiV2ConnectionsTestRoute, postApiV2ConnectionsTestRouteHandler)
  .openapi(postApiV2ConnectionsDefaultsRoute, postApiV2ConnectionsDefaultsRouteHandler)
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdRoute, getApiV2DagsDagIdDagRunsDagRunIdRouteHandler)
  .openapi(
    deleteApiV2DagsDagIdDagRunsDagRunIdRoute,
    deleteApiV2DagsDagIdDagRunsDagRunIdRouteHandler,
  )
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdRoute, patchApiV2DagsDagIdDagRunsDagRunIdRouteHandler)
  .openapi(patchApiV2DagsDagIdDagRunsRoute, patchApiV2DagsDagIdDagRunsRouteHandler)
  .openapi(getApiV2DagsDagIdDagRunsRoute, getApiV2DagsDagIdDagRunsRouteHandler)
  .openapi(postApiV2DagsDagIdDagRunsRoute, postApiV2DagsDagIdDagRunsRouteHandler)
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsRoute,
    getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsRouteHandler,
  )
  .openapi(
    postApiV2DagsDagIdDagRunsDagRunIdClearRoute,
    postApiV2DagsDagIdDagRunsDagRunIdClearRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdWaitRoute,
    getApiV2DagsDagIdDagRunsDagRunIdWaitRouteHandler,
  )
  .openapi(postApiV2DagsDagIdDagRunsListRoute, postApiV2DagsDagIdDagRunsListRouteHandler)
  .openapi(postApiV2DagsDagIdClearDagRunsRoute, postApiV2DagsDagIdClearDagRunsRouteHandler)
  .openapi(postApiV2DagsDagIdClearPartitionsRoute, postApiV2DagsDagIdClearPartitionsRouteHandler)
  .openapi(getApiV2DagSourcesDagIdRoute, getApiV2DagSourcesDagIdRouteHandler)
  .openapi(getApiV2DagBundlesRoute, getApiV2DagBundlesRouteHandler)
  .openapi(getApiV2DagBundlesBundleNameRoute, getApiV2DagBundlesBundleNameRouteHandler)
  .openapi(getApiV2DagBundlesBundleNameFilesRoute, getApiV2DagBundlesBundleNameFilesRouteHandler)
  .openapi(getApiV2DagStatsRoute, getApiV2DagStatsRouteHandler)
  .openapi(getApiV2ConfigRoute, getApiV2ConfigRouteHandler)
  .openapi(
    getApiV2ConfigSectionSectionOptionOptionRoute,
    getApiV2ConfigSectionSectionOptionOptionRouteHandler,
  )
  .openapi(getApiV2DagWarningsRoute, getApiV2DagWarningsRouteHandler)
  .openapi(getApiV2DagsRoute, getApiV2DagsRouteHandler)
  .openapi(patchApiV2DagsRoute, patchApiV2DagsRouteHandler)
  .openapi(getApiV2DagsDagIdRoute, getApiV2DagsDagIdRouteHandler)
  .openapi(patchApiV2DagsDagIdRoute, patchApiV2DagsDagIdRouteHandler)
  .openapi(deleteApiV2DagsDagIdRoute, deleteApiV2DagsDagIdRouteHandler)
  .openapi(getApiV2DagsDagIdDetailsRoute, getApiV2DagsDagIdDetailsRouteHandler)
  .openapi(patchApiV2DagsBulkRoute, patchApiV2DagsBulkRouteHandler)
  .openapi(postApiV2DagsDagIdFavoriteRoute, postApiV2DagsDagIdFavoriteRouteHandler)
  .openapi(postApiV2DagsDagIdUnfavoriteRoute, postApiV2DagsDagIdUnfavoriteRouteHandler)
  .openapi(getApiV2EventLogsEventLogIdRoute, getApiV2EventLogsEventLogIdRouteHandler)
  .openapi(getApiV2EventLogsRoute, getApiV2EventLogsRouteHandler)
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRouteHandler,
  )
  .openapi(getApiV2ImportErrorsImportErrorIdRoute, getApiV2ImportErrorsImportErrorIdRouteHandler)
  .openapi(getApiV2ImportErrorsRoute, getApiV2ImportErrorsRouteHandler)
  .openapi(getApiV2JobsRoute, getApiV2JobsRouteHandler)
  .openapi(getApiV2PluginsRoute, getApiV2PluginsRouteHandler)
  .openapi(getApiV2PluginsImportErrorsRoute, getApiV2PluginsImportErrorsRouteHandler)
  .openapi(deleteApiV2PoolsPoolNameRoute, deleteApiV2PoolsPoolNameRouteHandler)
  .openapi(getApiV2PoolsPoolNameRoute, getApiV2PoolsPoolNameRouteHandler)
  .openapi(patchApiV2PoolsPoolNameRoute, patchApiV2PoolsPoolNameRouteHandler)
  .openapi(getApiV2PoolsRoute, getApiV2PoolsRouteHandler)
  .openapi(postApiV2PoolsRoute, postApiV2PoolsRouteHandler)
  .openapi(patchApiV2PoolsRoute, patchApiV2PoolsRouteHandler)
  .openapi(getApiV2ProvidersRoute, getApiV2ProvidersRouteHandler)
  .openapi(getApiV2ProvidersProviderNameRoute, getApiV2ProvidersProviderNameRouteHandler)
  .openapi(getApiV2AssetsAssetIdStateStoreRoute, getApiV2AssetsAssetIdStateStoreRouteHandler)
  .openapi(deleteApiV2AssetsAssetIdStateStoreRoute, deleteApiV2AssetsAssetIdStateStoreRouteHandler)
  .openapi(getApiV2AssetsAssetIdStateStoreKeyRoute, getApiV2AssetsAssetIdStateStoreKeyRouteHandler)
  .openapi(putApiV2AssetsAssetIdStateStoreKeyRoute, putApiV2AssetsAssetIdStateStoreKeyRouteHandler)
  .openapi(
    deleteApiV2AssetsAssetIdStateStoreKeyRoute,
    deleteApiV2AssetsAssetIdStateStoreKeyRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRouteHandler,
  )
  .openapi(
    deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute,
    deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler,
  )
  .openapi(
    putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
    putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler,
  )
  .openapi(
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler,
  )
  .openapi(
    deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
    deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler,
  )
  .openapi(
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler,
  )
  .openapi(
    deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
    deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRouteHandler,
  )
  .openapi(
    postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute,
    postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler,
  )
  .openapi(
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler,
  )
  .openapi(
    deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
    deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRouteHandler,
  )
  .openapi(
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRouteHandler,
  )
  .openapi(
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute,
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRouteHandler,
  )
  .openapi(
    postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListRoute,
    postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberRouteHandler,
  )
  .openapi(
    postApiV2DagsDagIdClearTaskInstancesRoute,
    postApiV2DagsDagIdClearTaskInstancesRouteHandler,
  )
  .openapi(
    patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdRoute,
    patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdRouteHandler,
  )
  .openapi(
    patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunRoute,
    patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunRouteHandler,
  )
  .openapi(
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunRoute,
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunRouteHandler,
  )
  .openapi(
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunRoute,
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunRouteHandler,
  )
  .openapi(getApiV2DagsDagIdTasksRoute, getApiV2DagsDagIdTasksRouteHandler)
  .openapi(getApiV2DagsDagIdTasksTaskIdRoute, getApiV2DagsDagIdTasksTaskIdRouteHandler)
  .openapi(getApiV2TriggersRoute, getApiV2TriggersRouteHandler)
  .openapi(getApiV2TriggersTriggerIdRoute, getApiV2TriggersTriggerIdRouteHandler)
  .openapi(deleteApiV2VariablesVariableKeyRoute, deleteApiV2VariablesVariableKeyRouteHandler)
  .openapi(getApiV2VariablesVariableKeyRoute, getApiV2VariablesVariableKeyRouteHandler)
  .openapi(patchApiV2VariablesVariableKeyRoute, patchApiV2VariablesVariableKeyRouteHandler)
  .openapi(getApiV2VariablesRoute, getApiV2VariablesRouteHandler)
  .openapi(postApiV2VariablesRoute, postApiV2VariablesRouteHandler)
  .openapi(patchApiV2VariablesRoute, patchApiV2VariablesRouteHandler)
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberRouteHandler,
  )
  .openapi(putApiV2ParseDagFileFileTokenRoute, putApiV2ParseDagFileFileTokenRouteHandler)
  .openapi(getApiV2DagTagsRoute, getApiV2DagTagsRouteHandler)
  .openapi(getApiV2DagsDagIdDagVersionsDiffRoute, getApiV2DagsDagIdDagVersionsDiffRouteHandler)
  .openapi(
    getApiV2DagsDagIdDagVersionsVersionNumberRoute,
    getApiV2DagsDagIdDagVersionsVersionNumberRouteHandler,
  )
  .openapi(getApiV2DagsDagIdDagVersionsRoute, getApiV2DagsDagIdDagVersionsRouteHandler)
  .openapi(
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute,
    patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberRoute,
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberRouteHandler,
  )
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsRoute,
    getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsRouteHandler,
  )
  .openapi(getApiV2MonitorHealthRoute, getApiV2MonitorHealthRouteHandler)
  .openapi(getApiV2VersionRoute, getApiV2VersionRouteHandler)
  .openapi(getApiV2AuthLoginRoute, getApiV2AuthLoginRouteHandler)
  .openapi(getApiV2AuthCliMetadataRoute, getApiV2AuthCliMetadataRouteHandler)
  .openapi(getApiV2AuthLogoutRoute, getApiV2AuthLogoutRouteHandler)

export default app
