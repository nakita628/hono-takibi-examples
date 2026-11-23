import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const getApiV2AssetsRouteHandler: RouteHandler<typeof getApiV2AssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AssetsAliasesRouteHandler: RouteHandler<
  typeof getApiV2AssetsAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AssetsAliasesAssetAliasIdRouteHandler: RouteHandler<
  typeof getApiV2AssetsAliasesAssetAliasIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AssetsEventsRouteHandler: RouteHandler<
  typeof getApiV2AssetsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AssetsEventsRouteHandler: RouteHandler<
  typeof postApiV2AssetsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AssetsAssetIdMaterializeRouteHandler: RouteHandler<
  typeof postApiV2AssetsAssetIdMaterializeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AssetsAssetIdQueuedEventsRouteHandler: RouteHandler<
  typeof getApiV2AssetsAssetIdQueuedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AssetsAssetIdQueuedEventsRouteHandler: RouteHandler<
  typeof deleteApiV2AssetsAssetIdQueuedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AssetsAssetIdRouteHandler: RouteHandler<
  typeof getApiV2AssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdAssetsQueuedEventsRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdAssetsQueuedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DagsDagIdAssetsQueuedEventsRouteHandler: RouteHandler<
  typeof deleteApiV2DagsDagIdAssetsQueuedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdAssetsAssetIdQueuedEventsRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DagsDagIdAssetsAssetIdQueuedEventsRouteHandler: RouteHandler<
  typeof deleteApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BackfillsRouteHandler: RouteHandler<typeof getApiV2BackfillsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2BackfillsRouteHandler: RouteHandler<typeof postApiV2BackfillsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2BackfillsBackfillIdRouteHandler: RouteHandler<
  typeof getApiV2BackfillsBackfillIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BackfillsBackfillIdDagRunsRouteHandler: RouteHandler<
  typeof getApiV2BackfillsBackfillIdDagRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2BackfillsBackfillIdPauseRouteHandler: RouteHandler<
  typeof putApiV2BackfillsBackfillIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2BackfillsBackfillIdUnpauseRouteHandler: RouteHandler<
  typeof putApiV2BackfillsBackfillIdUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2BackfillsBackfillIdCancelRouteHandler: RouteHandler<
  typeof putApiV2BackfillsBackfillIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2BackfillsDryRunRouteHandler: RouteHandler<
  typeof postApiV2BackfillsDryRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof deleteApiV2ConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof getApiV2ConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof patchApiV2ConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ConnectionsEnqueueTestRouteHandler: RouteHandler<
  typeof getApiV2ConnectionsEnqueueTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ConnectionsEnqueueTestRouteHandler: RouteHandler<
  typeof postApiV2ConnectionsEnqueueTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ConnectionsRouteHandler: RouteHandler<
  typeof getApiV2ConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ConnectionsRouteHandler: RouteHandler<
  typeof postApiV2ConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ConnectionsRouteHandler: RouteHandler<
  typeof patchApiV2ConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ConnectionsTestRouteHandler: RouteHandler<
  typeof postApiV2ConnectionsTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ConnectionsDefaultsRouteHandler: RouteHandler<
  typeof postApiV2ConnectionsDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DagsDagIdDagRunsDagRunIdRouteHandler: RouteHandler<
  typeof deleteApiV2DagsDagIdDagRunsDagRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DagsDagIdDagRunsRouteHandler: RouteHandler<
  typeof postApiV2DagsDagIdDagRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DagsDagIdDagRunsDagRunIdClearRouteHandler: RouteHandler<
  typeof postApiV2DagsDagIdDagRunsDagRunIdClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdWaitRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdWaitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DagsDagIdDagRunsListRouteHandler: RouteHandler<
  typeof postApiV2DagsDagIdDagRunsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DagsDagIdClearDagRunsRouteHandler: RouteHandler<
  typeof postApiV2DagsDagIdClearDagRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DagsDagIdClearPartitionsRouteHandler: RouteHandler<
  typeof postApiV2DagsDagIdClearPartitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagSourcesDagIdRouteHandler: RouteHandler<
  typeof getApiV2DagSourcesDagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagBundlesRouteHandler: RouteHandler<typeof getApiV2DagBundlesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2DagBundlesBundleNameRouteHandler: RouteHandler<
  typeof getApiV2DagBundlesBundleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagBundlesBundleNameFilesRouteHandler: RouteHandler<
  typeof getApiV2DagBundlesBundleNameFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagStatsRouteHandler: RouteHandler<typeof getApiV2DagStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2ConfigRouteHandler: RouteHandler<typeof getApiV2ConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ConfigSectionSectionOptionOptionRouteHandler: RouteHandler<
  typeof getApiV2ConfigSectionSectionOptionOptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagWarningsRouteHandler: RouteHandler<
  typeof getApiV2DagWarningsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsRouteHandler: RouteHandler<typeof getApiV2DagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsRouteHandler: RouteHandler<typeof patchApiV2DagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdRouteHandler: RouteHandler<typeof getApiV2DagsDagIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DagsDagIdRouteHandler: RouteHandler<
  typeof deleteApiV2DagsDagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDetailsRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsBulkRouteHandler: RouteHandler<typeof patchApiV2DagsBulkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2DagsDagIdFavoriteRouteHandler: RouteHandler<
  typeof postApiV2DagsDagIdFavoriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DagsDagIdUnfavoriteRouteHandler: RouteHandler<
  typeof postApiV2DagsDagIdUnfavoriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EventLogsEventLogIdRouteHandler: RouteHandler<
  typeof getApiV2EventLogsEventLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EventLogsRouteHandler: RouteHandler<typeof getApiV2EventLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ImportErrorsImportErrorIdRouteHandler: RouteHandler<
  typeof getApiV2ImportErrorsImportErrorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ImportErrorsRouteHandler: RouteHandler<
  typeof getApiV2ImportErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2JobsRouteHandler: RouteHandler<typeof getApiV2JobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PluginsRouteHandler: RouteHandler<typeof getApiV2PluginsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PluginsImportErrorsRouteHandler: RouteHandler<
  typeof getApiV2PluginsImportErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2PoolsPoolNameRouteHandler: RouteHandler<
  typeof deleteApiV2PoolsPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PoolsPoolNameRouteHandler: RouteHandler<
  typeof getApiV2PoolsPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2PoolsPoolNameRouteHandler: RouteHandler<
  typeof patchApiV2PoolsPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PoolsRouteHandler: RouteHandler<typeof getApiV2PoolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PoolsRouteHandler: RouteHandler<typeof postApiV2PoolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2PoolsRouteHandler: RouteHandler<typeof patchApiV2PoolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProvidersRouteHandler: RouteHandler<typeof getApiV2ProvidersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2ProvidersProviderNameRouteHandler: RouteHandler<
  typeof getApiV2ProvidersProviderNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AssetsAssetIdStateStoreRouteHandler: RouteHandler<
  typeof getApiV2AssetsAssetIdStateStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AssetsAssetIdStateStoreRouteHandler: RouteHandler<
  typeof deleteApiV2AssetsAssetIdStateStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AssetsAssetIdStateStoreKeyRouteHandler: RouteHandler<
  typeof getApiV2AssetsAssetIdStateStoreKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AssetsAssetIdStateStoreKeyRouteHandler: RouteHandler<
  typeof putApiV2AssetsAssetIdStateStoreKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AssetsAssetIdStateStoreKeyRouteHandler: RouteHandler<
  typeof deleteApiV2AssetsAssetIdStateStoreKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRouteHandler: RouteHandler<
  typeof deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler: RouteHandler<
  typeof putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRouteHandler: RouteHandler<
  typeof deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler: RouteHandler<
  typeof deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRouteHandler: RouteHandler<
  typeof postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler: RouteHandler<
  typeof deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListRouteHandler: RouteHandler<
  typeof postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DagsDagIdClearTaskInstancesRouteHandler: RouteHandler<
  typeof postApiV2DagsDagIdClearTaskInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdTasksRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdTasksTaskIdRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggersRouteHandler: RouteHandler<typeof getApiV2TriggersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggersTriggerIdRouteHandler: RouteHandler<
  typeof getApiV2TriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2VariablesVariableKeyRouteHandler: RouteHandler<
  typeof deleteApiV2VariablesVariableKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2VariablesVariableKeyRouteHandler: RouteHandler<
  typeof getApiV2VariablesVariableKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2VariablesVariableKeyRouteHandler: RouteHandler<
  typeof patchApiV2VariablesVariableKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2VariablesRouteHandler: RouteHandler<typeof getApiV2VariablesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2VariablesRouteHandler: RouteHandler<typeof postApiV2VariablesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiV2VariablesRouteHandler: RouteHandler<
  typeof patchApiV2VariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ParseDagFileFileTokenRouteHandler: RouteHandler<
  typeof putApiV2ParseDagFileFileTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagTagsRouteHandler: RouteHandler<typeof getApiV2DagTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagVersionsDiffRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagVersionsDiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagVersionsVersionNumberRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagVersionsVersionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagVersionsRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRouteHandler: RouteHandler<
  typeof patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsRouteHandler: RouteHandler<
  typeof getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MonitorHealthRouteHandler: RouteHandler<
  typeof getApiV2MonitorHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2VersionRouteHandler: RouteHandler<typeof getApiV2VersionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthLoginRouteHandler: RouteHandler<typeof getApiV2AuthLoginRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthCliMetadataRouteHandler: RouteHandler<
  typeof getApiV2AuthCliMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthLogoutRouteHandler: RouteHandler<typeof getApiV2AuthLogoutRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
