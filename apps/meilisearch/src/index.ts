import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexesIndexUidDocumentsDocumentIdRoute,
  deleteIndexesIndexUidDocumentsRoute,
  deleteIndexesIndexUidRoute,
  deleteIndexesIndexUidSettingsChatRoute,
  deleteIndexesIndexUidSettingsDictionaryRoute,
  deleteIndexesIndexUidSettingsDisplayedAttributesRoute,
  deleteIndexesIndexUidSettingsDistinctAttributeRoute,
  deleteIndexesIndexUidSettingsEmbeddersRoute,
  deleteIndexesIndexUidSettingsFacetingRoute,
  deleteIndexesIndexUidSettingsFacetSearchRoute,
  deleteIndexesIndexUidSettingsFilterableAttributesRoute,
  deleteIndexesIndexUidSettingsLocalizedAttributesRoute,
  deleteIndexesIndexUidSettingsNonSeparatorTokensRoute,
  deleteIndexesIndexUidSettingsPaginationRoute,
  deleteIndexesIndexUidSettingsPrefixSearchRoute,
  deleteIndexesIndexUidSettingsProximityPrecisionRoute,
  deleteIndexesIndexUidSettingsRankingRulesRoute,
  deleteIndexesIndexUidSettingsRoute,
  deleteIndexesIndexUidSettingsSearchableAttributesRoute,
  deleteIndexesIndexUidSettingsSearchCutoffMsRoute,
  deleteIndexesIndexUidSettingsSeparatorTokensRoute,
  deleteIndexesIndexUidSettingsSortableAttributesRoute,
  deleteIndexesIndexUidSettingsStopWordsRoute,
  deleteIndexesIndexUidSettingsSynonymsRoute,
  deleteIndexesIndexUidSettingsTypoToleranceRoute,
  deleteKeysUidOrKeyRoute,
  deleteLogsStreamRoute,
  deleteTasksRoute,
  getBatchesBatchUidRoute,
  getBatchesRoute,
  getExperimentalFeaturesRoute,
  getHealthRoute,
  getIndexesIndexUidDocumentsDocumentIdRoute,
  getIndexesIndexUidDocumentsRoute,
  getIndexesIndexUidRoute,
  getIndexesIndexUidSearchRoute,
  getIndexesIndexUidSettingsChatRoute,
  getIndexesIndexUidSettingsDictionaryRoute,
  getIndexesIndexUidSettingsDisplayedAttributesRoute,
  getIndexesIndexUidSettingsDistinctAttributeRoute,
  getIndexesIndexUidSettingsEmbeddersRoute,
  getIndexesIndexUidSettingsFacetingRoute,
  getIndexesIndexUidSettingsFacetSearchRoute,
  getIndexesIndexUidSettingsFilterableAttributesRoute,
  getIndexesIndexUidSettingsLocalizedAttributesRoute,
  getIndexesIndexUidSettingsNonSeparatorTokensRoute,
  getIndexesIndexUidSettingsPaginationRoute,
  getIndexesIndexUidSettingsPrefixSearchRoute,
  getIndexesIndexUidSettingsProximityPrecisionRoute,
  getIndexesIndexUidSettingsRankingRulesRoute,
  getIndexesIndexUidSettingsRoute,
  getIndexesIndexUidSettingsSearchableAttributesRoute,
  getIndexesIndexUidSettingsSearchCutoffMsRoute,
  getIndexesIndexUidSettingsSeparatorTokensRoute,
  getIndexesIndexUidSettingsSortableAttributesRoute,
  getIndexesIndexUidSettingsStopWordsRoute,
  getIndexesIndexUidSettingsSynonymsRoute,
  getIndexesIndexUidSettingsTypoToleranceRoute,
  getIndexesIndexUidSimilarRoute,
  getIndexesIndexUidStatsRoute,
  getIndexesRoute,
  getKeysRoute,
  getKeysUidOrKeyRoute,
  getMetricsRoute,
  getNetworkRoute,
  getStatsRoute,
  getTasksRoute,
  getTasksTaskUidRoute,
  getVersionRoute,
  patchExperimentalFeaturesRoute,
  patchIndexesIndexUidRoute,
  patchIndexesIndexUidSettingsEmbeddersRoute,
  patchIndexesIndexUidSettingsFacetingRoute,
  patchIndexesIndexUidSettingsPaginationRoute,
  patchIndexesIndexUidSettingsRoute,
  patchIndexesIndexUidSettingsTypoToleranceRoute,
  patchKeysUidOrKeyRoute,
  patchNetworkRoute,
  postDumpsRoute,
  postIndexesIndexUidDeleteBatchRoute,
  postIndexesIndexUidDocumentsDeleteRoute,
  postIndexesIndexUidDocumentsEditRoute,
  postIndexesIndexUidDocumentsFetchRoute,
  postIndexesIndexUidDocumentsRoute,
  postIndexesIndexUidFacetSearchRoute,
  postIndexesIndexUidSearchRoute,
  postIndexesIndexUidSimilarRoute,
  postIndexesRoute,
  postKeysRoute,
  postLogsStderrRoute,
  postLogsStreamRoute,
  postMultiSearchRoute,
  postSnapshotsRoute,
  postSwapIndexesRoute,
  postTasksCancelRoute,
  putIndexesIndexUidDocumentsRoute,
  putIndexesIndexUidSettingsChatRoute,
  putIndexesIndexUidSettingsDictionaryRoute,
  putIndexesIndexUidSettingsDisplayedAttributesRoute,
  putIndexesIndexUidSettingsDistinctAttributeRoute,
  putIndexesIndexUidSettingsFacetSearchRoute,
  putIndexesIndexUidSettingsFilterableAttributesRoute,
  putIndexesIndexUidSettingsLocalizedAttributesRoute,
  putIndexesIndexUidSettingsNonSeparatorTokensRoute,
  putIndexesIndexUidSettingsPrefixSearchRoute,
  putIndexesIndexUidSettingsProximityPrecisionRoute,
  putIndexesIndexUidSettingsRankingRulesRoute,
  putIndexesIndexUidSettingsSearchableAttributesRoute,
  putIndexesIndexUidSettingsSearchCutoffMsRoute,
  putIndexesIndexUidSettingsSeparatorTokensRoute,
  putIndexesIndexUidSettingsSortableAttributesRoute,
  putIndexesIndexUidSettingsStopWordsRoute,
  putIndexesIndexUidSettingsSynonymsRoute,
} from './routes'
import {
  deleteIndexesIndexUidDocumentsDocumentIdRouteHandler,
  deleteIndexesIndexUidDocumentsRouteHandler,
  deleteIndexesIndexUidRouteHandler,
  deleteIndexesIndexUidSettingsChatRouteHandler,
  deleteIndexesIndexUidSettingsDictionaryRouteHandler,
  deleteIndexesIndexUidSettingsDisplayedAttributesRouteHandler,
  deleteIndexesIndexUidSettingsDistinctAttributeRouteHandler,
  deleteIndexesIndexUidSettingsEmbeddersRouteHandler,
  deleteIndexesIndexUidSettingsFacetingRouteHandler,
  deleteIndexesIndexUidSettingsFacetSearchRouteHandler,
  deleteIndexesIndexUidSettingsFilterableAttributesRouteHandler,
  deleteIndexesIndexUidSettingsLocalizedAttributesRouteHandler,
  deleteIndexesIndexUidSettingsNonSeparatorTokensRouteHandler,
  deleteIndexesIndexUidSettingsPaginationRouteHandler,
  deleteIndexesIndexUidSettingsPrefixSearchRouteHandler,
  deleteIndexesIndexUidSettingsProximityPrecisionRouteHandler,
  deleteIndexesIndexUidSettingsRankingRulesRouteHandler,
  deleteIndexesIndexUidSettingsRouteHandler,
  deleteIndexesIndexUidSettingsSearchableAttributesRouteHandler,
  deleteIndexesIndexUidSettingsSearchCutoffMsRouteHandler,
  deleteIndexesIndexUidSettingsSeparatorTokensRouteHandler,
  deleteIndexesIndexUidSettingsSortableAttributesRouteHandler,
  deleteIndexesIndexUidSettingsStopWordsRouteHandler,
  deleteIndexesIndexUidSettingsSynonymsRouteHandler,
  deleteIndexesIndexUidSettingsTypoToleranceRouteHandler,
  deleteKeysUidOrKeyRouteHandler,
  deleteLogsStreamRouteHandler,
  deleteTasksRouteHandler,
  getBatchesBatchUidRouteHandler,
  getBatchesRouteHandler,
  getExperimentalFeaturesRouteHandler,
  getHealthRouteHandler,
  getIndexesIndexUidDocumentsDocumentIdRouteHandler,
  getIndexesIndexUidDocumentsRouteHandler,
  getIndexesIndexUidRouteHandler,
  getIndexesIndexUidSearchRouteHandler,
  getIndexesIndexUidSettingsChatRouteHandler,
  getIndexesIndexUidSettingsDictionaryRouteHandler,
  getIndexesIndexUidSettingsDisplayedAttributesRouteHandler,
  getIndexesIndexUidSettingsDistinctAttributeRouteHandler,
  getIndexesIndexUidSettingsEmbeddersRouteHandler,
  getIndexesIndexUidSettingsFacetingRouteHandler,
  getIndexesIndexUidSettingsFacetSearchRouteHandler,
  getIndexesIndexUidSettingsFilterableAttributesRouteHandler,
  getIndexesIndexUidSettingsLocalizedAttributesRouteHandler,
  getIndexesIndexUidSettingsNonSeparatorTokensRouteHandler,
  getIndexesIndexUidSettingsPaginationRouteHandler,
  getIndexesIndexUidSettingsPrefixSearchRouteHandler,
  getIndexesIndexUidSettingsProximityPrecisionRouteHandler,
  getIndexesIndexUidSettingsRankingRulesRouteHandler,
  getIndexesIndexUidSettingsRouteHandler,
  getIndexesIndexUidSettingsSearchableAttributesRouteHandler,
  getIndexesIndexUidSettingsSearchCutoffMsRouteHandler,
  getIndexesIndexUidSettingsSeparatorTokensRouteHandler,
  getIndexesIndexUidSettingsSortableAttributesRouteHandler,
  getIndexesIndexUidSettingsStopWordsRouteHandler,
  getIndexesIndexUidSettingsSynonymsRouteHandler,
  getIndexesIndexUidSettingsTypoToleranceRouteHandler,
  getIndexesIndexUidSimilarRouteHandler,
  getIndexesIndexUidStatsRouteHandler,
  getIndexesRouteHandler,
  getKeysRouteHandler,
  getKeysUidOrKeyRouteHandler,
  getMetricsRouteHandler,
  getNetworkRouteHandler,
  getStatsRouteHandler,
  getTasksRouteHandler,
  getTasksTaskUidRouteHandler,
  getVersionRouteHandler,
  patchExperimentalFeaturesRouteHandler,
  patchIndexesIndexUidRouteHandler,
  patchIndexesIndexUidSettingsEmbeddersRouteHandler,
  patchIndexesIndexUidSettingsFacetingRouteHandler,
  patchIndexesIndexUidSettingsPaginationRouteHandler,
  patchIndexesIndexUidSettingsRouteHandler,
  patchIndexesIndexUidSettingsTypoToleranceRouteHandler,
  patchKeysUidOrKeyRouteHandler,
  patchNetworkRouteHandler,
  postDumpsRouteHandler,
  postIndexesIndexUidDeleteBatchRouteHandler,
  postIndexesIndexUidDocumentsDeleteRouteHandler,
  postIndexesIndexUidDocumentsEditRouteHandler,
  postIndexesIndexUidDocumentsFetchRouteHandler,
  postIndexesIndexUidDocumentsRouteHandler,
  postIndexesIndexUidFacetSearchRouteHandler,
  postIndexesIndexUidSearchRouteHandler,
  postIndexesIndexUidSimilarRouteHandler,
  postIndexesRouteHandler,
  postKeysRouteHandler,
  postLogsStderrRouteHandler,
  postLogsStreamRouteHandler,
  postMultiSearchRouteHandler,
  postSnapshotsRouteHandler,
  postSwapIndexesRouteHandler,
  postTasksCancelRouteHandler,
  putIndexesIndexUidDocumentsRouteHandler,
  putIndexesIndexUidSettingsChatRouteHandler,
  putIndexesIndexUidSettingsDictionaryRouteHandler,
  putIndexesIndexUidSettingsDisplayedAttributesRouteHandler,
  putIndexesIndexUidSettingsDistinctAttributeRouteHandler,
  putIndexesIndexUidSettingsFacetSearchRouteHandler,
  putIndexesIndexUidSettingsFilterableAttributesRouteHandler,
  putIndexesIndexUidSettingsLocalizedAttributesRouteHandler,
  putIndexesIndexUidSettingsNonSeparatorTokensRouteHandler,
  putIndexesIndexUidSettingsPrefixSearchRouteHandler,
  putIndexesIndexUidSettingsProximityPrecisionRouteHandler,
  putIndexesIndexUidSettingsRankingRulesRouteHandler,
  putIndexesIndexUidSettingsSearchableAttributesRouteHandler,
  putIndexesIndexUidSettingsSearchCutoffMsRouteHandler,
  putIndexesIndexUidSettingsSeparatorTokensRouteHandler,
  putIndexesIndexUidSettingsSortableAttributesRouteHandler,
  putIndexesIndexUidSettingsStopWordsRouteHandler,
  putIndexesIndexUidSettingsSynonymsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBatchesRoute, getBatchesRouteHandler)
  .openapi(getBatchesBatchUidRoute, getBatchesBatchUidRouteHandler)
  .openapi(postDumpsRoute, postDumpsRouteHandler)
  .openapi(getExperimentalFeaturesRoute, getExperimentalFeaturesRouteHandler)
  .openapi(patchExperimentalFeaturesRoute, patchExperimentalFeaturesRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getIndexesRoute, getIndexesRouteHandler)
  .openapi(postIndexesRoute, postIndexesRouteHandler)
  .openapi(getIndexesIndexUidRoute, getIndexesIndexUidRouteHandler)
  .openapi(deleteIndexesIndexUidRoute, deleteIndexesIndexUidRouteHandler)
  .openapi(patchIndexesIndexUidRoute, patchIndexesIndexUidRouteHandler)
  .openapi(postIndexesIndexUidDeleteBatchRoute, postIndexesIndexUidDeleteBatchRouteHandler)
  .openapi(getIndexesIndexUidDocumentsRoute, getIndexesIndexUidDocumentsRouteHandler)
  .openapi(putIndexesIndexUidDocumentsRoute, putIndexesIndexUidDocumentsRouteHandler)
  .openapi(postIndexesIndexUidDocumentsRoute, postIndexesIndexUidDocumentsRouteHandler)
  .openapi(deleteIndexesIndexUidDocumentsRoute, deleteIndexesIndexUidDocumentsRouteHandler)
  .openapi(postIndexesIndexUidDocumentsDeleteRoute, postIndexesIndexUidDocumentsDeleteRouteHandler)
  .openapi(postIndexesIndexUidDocumentsEditRoute, postIndexesIndexUidDocumentsEditRouteHandler)
  .openapi(postIndexesIndexUidDocumentsFetchRoute, postIndexesIndexUidDocumentsFetchRouteHandler)
  .openapi(
    getIndexesIndexUidDocumentsDocumentIdRoute,
    getIndexesIndexUidDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidDocumentsDocumentIdRoute,
    deleteIndexesIndexUidDocumentsDocumentIdRouteHandler,
  )
  .openapi(postIndexesIndexUidFacetSearchRoute, postIndexesIndexUidFacetSearchRouteHandler)
  .openapi(getIndexesIndexUidSearchRoute, getIndexesIndexUidSearchRouteHandler)
  .openapi(postIndexesIndexUidSearchRoute, postIndexesIndexUidSearchRouteHandler)
  .openapi(getIndexesIndexUidSettingsRoute, getIndexesIndexUidSettingsRouteHandler)
  .openapi(deleteIndexesIndexUidSettingsRoute, deleteIndexesIndexUidSettingsRouteHandler)
  .openapi(patchIndexesIndexUidSettingsRoute, patchIndexesIndexUidSettingsRouteHandler)
  .openapi(getIndexesIndexUidSettingsChatRoute, getIndexesIndexUidSettingsChatRouteHandler)
  .openapi(putIndexesIndexUidSettingsChatRoute, putIndexesIndexUidSettingsChatRouteHandler)
  .openapi(deleteIndexesIndexUidSettingsChatRoute, deleteIndexesIndexUidSettingsChatRouteHandler)
  .openapi(
    getIndexesIndexUidSettingsDictionaryRoute,
    getIndexesIndexUidSettingsDictionaryRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsDictionaryRoute,
    putIndexesIndexUidSettingsDictionaryRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsDictionaryRoute,
    deleteIndexesIndexUidSettingsDictionaryRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsDisplayedAttributesRoute,
    getIndexesIndexUidSettingsDisplayedAttributesRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsDisplayedAttributesRoute,
    putIndexesIndexUidSettingsDisplayedAttributesRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsDisplayedAttributesRoute,
    deleteIndexesIndexUidSettingsDisplayedAttributesRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsDistinctAttributeRoute,
    getIndexesIndexUidSettingsDistinctAttributeRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsDistinctAttributeRoute,
    putIndexesIndexUidSettingsDistinctAttributeRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsDistinctAttributeRoute,
    deleteIndexesIndexUidSettingsDistinctAttributeRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsEmbeddersRoute,
    getIndexesIndexUidSettingsEmbeddersRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsEmbeddersRoute,
    deleteIndexesIndexUidSettingsEmbeddersRouteHandler,
  )
  .openapi(
    patchIndexesIndexUidSettingsEmbeddersRoute,
    patchIndexesIndexUidSettingsEmbeddersRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsFacetSearchRoute,
    getIndexesIndexUidSettingsFacetSearchRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsFacetSearchRoute,
    putIndexesIndexUidSettingsFacetSearchRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsFacetSearchRoute,
    deleteIndexesIndexUidSettingsFacetSearchRouteHandler,
  )
  .openapi(getIndexesIndexUidSettingsFacetingRoute, getIndexesIndexUidSettingsFacetingRouteHandler)
  .openapi(
    deleteIndexesIndexUidSettingsFacetingRoute,
    deleteIndexesIndexUidSettingsFacetingRouteHandler,
  )
  .openapi(
    patchIndexesIndexUidSettingsFacetingRoute,
    patchIndexesIndexUidSettingsFacetingRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsFilterableAttributesRoute,
    getIndexesIndexUidSettingsFilterableAttributesRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsFilterableAttributesRoute,
    putIndexesIndexUidSettingsFilterableAttributesRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsFilterableAttributesRoute,
    deleteIndexesIndexUidSettingsFilterableAttributesRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsLocalizedAttributesRoute,
    getIndexesIndexUidSettingsLocalizedAttributesRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsLocalizedAttributesRoute,
    putIndexesIndexUidSettingsLocalizedAttributesRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsLocalizedAttributesRoute,
    deleteIndexesIndexUidSettingsLocalizedAttributesRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsNonSeparatorTokensRoute,
    getIndexesIndexUidSettingsNonSeparatorTokensRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsNonSeparatorTokensRoute,
    putIndexesIndexUidSettingsNonSeparatorTokensRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsNonSeparatorTokensRoute,
    deleteIndexesIndexUidSettingsNonSeparatorTokensRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsPaginationRoute,
    getIndexesIndexUidSettingsPaginationRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsPaginationRoute,
    deleteIndexesIndexUidSettingsPaginationRouteHandler,
  )
  .openapi(
    patchIndexesIndexUidSettingsPaginationRoute,
    patchIndexesIndexUidSettingsPaginationRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsPrefixSearchRoute,
    getIndexesIndexUidSettingsPrefixSearchRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsPrefixSearchRoute,
    putIndexesIndexUidSettingsPrefixSearchRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsPrefixSearchRoute,
    deleteIndexesIndexUidSettingsPrefixSearchRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsProximityPrecisionRoute,
    getIndexesIndexUidSettingsProximityPrecisionRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsProximityPrecisionRoute,
    putIndexesIndexUidSettingsProximityPrecisionRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsProximityPrecisionRoute,
    deleteIndexesIndexUidSettingsProximityPrecisionRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsRankingRulesRoute,
    getIndexesIndexUidSettingsRankingRulesRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsRankingRulesRoute,
    putIndexesIndexUidSettingsRankingRulesRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsRankingRulesRoute,
    deleteIndexesIndexUidSettingsRankingRulesRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsSearchCutoffMsRoute,
    getIndexesIndexUidSettingsSearchCutoffMsRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsSearchCutoffMsRoute,
    putIndexesIndexUidSettingsSearchCutoffMsRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsSearchCutoffMsRoute,
    deleteIndexesIndexUidSettingsSearchCutoffMsRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsSearchableAttributesRoute,
    getIndexesIndexUidSettingsSearchableAttributesRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsSearchableAttributesRoute,
    putIndexesIndexUidSettingsSearchableAttributesRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsSearchableAttributesRoute,
    deleteIndexesIndexUidSettingsSearchableAttributesRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsSeparatorTokensRoute,
    getIndexesIndexUidSettingsSeparatorTokensRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsSeparatorTokensRoute,
    putIndexesIndexUidSettingsSeparatorTokensRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsSeparatorTokensRoute,
    deleteIndexesIndexUidSettingsSeparatorTokensRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsSortableAttributesRoute,
    getIndexesIndexUidSettingsSortableAttributesRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsSortableAttributesRoute,
    putIndexesIndexUidSettingsSortableAttributesRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsSortableAttributesRoute,
    deleteIndexesIndexUidSettingsSortableAttributesRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsStopWordsRoute,
    getIndexesIndexUidSettingsStopWordsRouteHandler,
  )
  .openapi(
    putIndexesIndexUidSettingsStopWordsRoute,
    putIndexesIndexUidSettingsStopWordsRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsStopWordsRoute,
    deleteIndexesIndexUidSettingsStopWordsRouteHandler,
  )
  .openapi(getIndexesIndexUidSettingsSynonymsRoute, getIndexesIndexUidSettingsSynonymsRouteHandler)
  .openapi(putIndexesIndexUidSettingsSynonymsRoute, putIndexesIndexUidSettingsSynonymsRouteHandler)
  .openapi(
    deleteIndexesIndexUidSettingsSynonymsRoute,
    deleteIndexesIndexUidSettingsSynonymsRouteHandler,
  )
  .openapi(
    getIndexesIndexUidSettingsTypoToleranceRoute,
    getIndexesIndexUidSettingsTypoToleranceRouteHandler,
  )
  .openapi(
    deleteIndexesIndexUidSettingsTypoToleranceRoute,
    deleteIndexesIndexUidSettingsTypoToleranceRouteHandler,
  )
  .openapi(
    patchIndexesIndexUidSettingsTypoToleranceRoute,
    patchIndexesIndexUidSettingsTypoToleranceRouteHandler,
  )
  .openapi(getIndexesIndexUidSimilarRoute, getIndexesIndexUidSimilarRouteHandler)
  .openapi(postIndexesIndexUidSimilarRoute, postIndexesIndexUidSimilarRouteHandler)
  .openapi(getIndexesIndexUidStatsRoute, getIndexesIndexUidStatsRouteHandler)
  .openapi(getKeysRoute, getKeysRouteHandler)
  .openapi(postKeysRoute, postKeysRouteHandler)
  .openapi(getKeysUidOrKeyRoute, getKeysUidOrKeyRouteHandler)
  .openapi(deleteKeysUidOrKeyRoute, deleteKeysUidOrKeyRouteHandler)
  .openapi(patchKeysUidOrKeyRoute, patchKeysUidOrKeyRouteHandler)
  .openapi(postLogsStderrRoute, postLogsStderrRouteHandler)
  .openapi(postLogsStreamRoute, postLogsStreamRouteHandler)
  .openapi(deleteLogsStreamRoute, deleteLogsStreamRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(postMultiSearchRoute, postMultiSearchRouteHandler)
  .openapi(getNetworkRoute, getNetworkRouteHandler)
  .openapi(patchNetworkRoute, patchNetworkRouteHandler)
  .openapi(postSnapshotsRoute, postSnapshotsRouteHandler)
  .openapi(getStatsRoute, getStatsRouteHandler)
  .openapi(postSwapIndexesRoute, postSwapIndexesRouteHandler)
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(deleteTasksRoute, deleteTasksRouteHandler)
  .openapi(postTasksCancelRoute, postTasksCancelRouteHandler)
  .openapi(getTasksTaskUidRoute, getTasksTaskUidRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)

export default app
