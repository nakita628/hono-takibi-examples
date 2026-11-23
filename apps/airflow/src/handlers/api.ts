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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV2AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAliasesAssetAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AssetsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AssetsAssetIdMaterializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAssetIdQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AssetsAssetIdQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdAssetsQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdAssetsQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BackfillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BackfillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BackfillsBackfillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BackfillsBackfillIdDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BackfillsBackfillIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BackfillsBackfillIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BackfillsBackfillIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BackfillsDryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ConnectionsEnqueueTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ConnectionsEnqueueTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ConnectionsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ConnectionsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdDagRunsDagRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdDagRunsDagRunIdClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdDagRunsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdClearDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdClearPartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagSourcesDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagBundlesBundleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagBundlesBundleNameFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ConfigSectionSectionOptionOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagWarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdUnfavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EventLogsEventLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EventLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ImportErrorsImportErrorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ImportErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PluginsImportErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2PoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProvidersProviderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAssetIdStateStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AssetsAssetIdStateStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAssetIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AssetsAssetIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AssetsAssetIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2DagsDagIdClearTaskInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2VariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2VariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2VariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2VariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ParseDagFileFileTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagVersionsDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagVersionsVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MonitorHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthCliMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
