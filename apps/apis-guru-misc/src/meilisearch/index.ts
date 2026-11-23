import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexesBooksDocuments1Route,
  deleteIndexesBooksDocumentsRoute,
  deleteIndexesBooksRoute,
  deleteIndexesBooksSettingsDisplayedAttributesRoute,
  deleteIndexesBooksSettingsDistinctAttributeRoute,
  deleteIndexesBooksSettingsFacetingRoute,
  deleteIndexesBooksSettingsFilterableAttributesRoute,
  deleteIndexesBooksSettingsPaginationRoute,
  deleteIndexesBooksSettingsRankingRulesRoute,
  deleteIndexesBooksSettingsRoute,
  deleteIndexesBooksSettingsSearchableAttributesRoute,
  deleteIndexesBooksSettingsSortableAttributesRoute,
  deleteIndexesBooksSettingsStopWordsRoute,
  deleteIndexesBooksSettingsSynonymsRoute,
  deleteIndexesBooksSettingsTypoToleranceRoute,
  deleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bRoute,
  deleteTasksRoute,
  getHealthRoute,
  getIndexesBooksDocuments2Route,
  getIndexesBooksDocumentsRoute,
  getIndexesBooksRoute,
  getIndexesBooksSearchRoute,
  getIndexesBooksSettingsDisplayedAttributesRoute,
  getIndexesBooksSettingsDistinctAttributeRoute,
  getIndexesBooksSettingsFacetingRoute,
  getIndexesBooksSettingsFilterableAttributesRoute,
  getIndexesBooksSettingsPaginationRoute,
  getIndexesBooksSettingsRankingRulesRoute,
  getIndexesBooksSettingsRoute,
  getIndexesBooksSettingsSearchableAttributesRoute,
  getIndexesBooksSettingsSortableAttributesRoute,
  getIndexesBooksSettingsStopWordsRoute,
  getIndexesBooksSettingsSynonymsRoute,
  getIndexesBooksSettingsTypoToleranceRoute,
  getIndexesBooksStatsRoute,
  getIndexesRoute,
  getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705Route,
  getKeysRoute,
  getStatsRoute,
  getTasks0Route,
  getTasksRoute,
  getVersionRoute,
  patchIndexesBooksRoute,
  patchIndexesBooksSettingsFacetingRoute,
  patchIndexesBooksSettingsPaginationRoute,
  patchIndexesBooksSettingsRoute,
  patchIndexesBooksSettingsTypoToleranceRoute,
  patchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddRoute,
  postDumpsRoute,
  postIndexesBooksDocumentsDeleteBatchRoute,
  postIndexesBooksDocumentsRoute,
  postIndexesBooksSearchRoute,
  postIndexesRoute,
  postIndexesSwapIndexesRoute,
  postKeysRoute,
  postTasksCancelRoute,
  putIndexesBooksDocumentsRoute,
  putIndexesBooksSettingsDisplayedAttributesRoute,
  putIndexesBooksSettingsDistinctAttributeRoute,
  putIndexesBooksSettingsFilterableAttributesRoute,
  putIndexesBooksSettingsRankingRulesRoute,
  putIndexesBooksSettingsSearchableAttributesRoute,
  putIndexesBooksSettingsSortableAttributesRoute,
  putIndexesBooksSettingsStopWordsRoute,
  putIndexesBooksSettingsSynonymsRoute,
} from './routes'
import {
  deleteIndexesBooksDocuments1RouteHandler,
  deleteIndexesBooksDocumentsRouteHandler,
  deleteIndexesBooksRouteHandler,
  deleteIndexesBooksSettingsDisplayedAttributesRouteHandler,
  deleteIndexesBooksSettingsDistinctAttributeRouteHandler,
  deleteIndexesBooksSettingsFacetingRouteHandler,
  deleteIndexesBooksSettingsFilterableAttributesRouteHandler,
  deleteIndexesBooksSettingsPaginationRouteHandler,
  deleteIndexesBooksSettingsRankingRulesRouteHandler,
  deleteIndexesBooksSettingsRouteHandler,
  deleteIndexesBooksSettingsSearchableAttributesRouteHandler,
  deleteIndexesBooksSettingsSortableAttributesRouteHandler,
  deleteIndexesBooksSettingsStopWordsRouteHandler,
  deleteIndexesBooksSettingsSynonymsRouteHandler,
  deleteIndexesBooksSettingsTypoToleranceRouteHandler,
  deleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bRouteHandler,
  deleteTasksRouteHandler,
  getHealthRouteHandler,
  getIndexesBooksDocuments2RouteHandler,
  getIndexesBooksDocumentsRouteHandler,
  getIndexesBooksRouteHandler,
  getIndexesBooksSearchRouteHandler,
  getIndexesBooksSettingsDisplayedAttributesRouteHandler,
  getIndexesBooksSettingsDistinctAttributeRouteHandler,
  getIndexesBooksSettingsFacetingRouteHandler,
  getIndexesBooksSettingsFilterableAttributesRouteHandler,
  getIndexesBooksSettingsPaginationRouteHandler,
  getIndexesBooksSettingsRankingRulesRouteHandler,
  getIndexesBooksSettingsRouteHandler,
  getIndexesBooksSettingsSearchableAttributesRouteHandler,
  getIndexesBooksSettingsSortableAttributesRouteHandler,
  getIndexesBooksSettingsStopWordsRouteHandler,
  getIndexesBooksSettingsSynonymsRouteHandler,
  getIndexesBooksSettingsTypoToleranceRouteHandler,
  getIndexesBooksStatsRouteHandler,
  getIndexesRouteHandler,
  getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705RouteHandler,
  getKeysRouteHandler,
  getStatsRouteHandler,
  getTasks0RouteHandler,
  getTasksRouteHandler,
  getVersionRouteHandler,
  patchIndexesBooksRouteHandler,
  patchIndexesBooksSettingsFacetingRouteHandler,
  patchIndexesBooksSettingsPaginationRouteHandler,
  patchIndexesBooksSettingsRouteHandler,
  patchIndexesBooksSettingsTypoToleranceRouteHandler,
  patchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddRouteHandler,
  postDumpsRouteHandler,
  postIndexesBooksDocumentsDeleteBatchRouteHandler,
  postIndexesBooksDocumentsRouteHandler,
  postIndexesBooksSearchRouteHandler,
  postIndexesRouteHandler,
  postIndexesSwapIndexesRouteHandler,
  postKeysRouteHandler,
  postTasksCancelRouteHandler,
  putIndexesBooksDocumentsRouteHandler,
  putIndexesBooksSettingsDisplayedAttributesRouteHandler,
  putIndexesBooksSettingsDistinctAttributeRouteHandler,
  putIndexesBooksSettingsFilterableAttributesRouteHandler,
  putIndexesBooksSettingsRankingRulesRouteHandler,
  putIndexesBooksSettingsSearchableAttributesRouteHandler,
  putIndexesBooksSettingsSortableAttributesRouteHandler,
  putIndexesBooksSettingsStopWordsRouteHandler,
  putIndexesBooksSettingsSynonymsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDumpsRoute, postDumpsRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getIndexesRoute, getIndexesRouteHandler)
  .openapi(postIndexesRoute, postIndexesRouteHandler)
  .openapi(deleteIndexesBooksRoute, deleteIndexesBooksRouteHandler)
  .openapi(getIndexesBooksRoute, getIndexesBooksRouteHandler)
  .openapi(patchIndexesBooksRoute, patchIndexesBooksRouteHandler)
  .openapi(deleteIndexesBooksDocumentsRoute, deleteIndexesBooksDocumentsRouteHandler)
  .openapi(getIndexesBooksDocumentsRoute, getIndexesBooksDocumentsRouteHandler)
  .openapi(postIndexesBooksDocumentsRoute, postIndexesBooksDocumentsRouteHandler)
  .openapi(putIndexesBooksDocumentsRoute, putIndexesBooksDocumentsRouteHandler)
  .openapi(deleteIndexesBooksDocuments1Route, deleteIndexesBooksDocuments1RouteHandler)
  .openapi(getIndexesBooksDocuments2Route, getIndexesBooksDocuments2RouteHandler)
  .openapi(
    postIndexesBooksDocumentsDeleteBatchRoute,
    postIndexesBooksDocumentsDeleteBatchRouteHandler,
  )
  .openapi(getIndexesBooksSearchRoute, getIndexesBooksSearchRouteHandler)
  .openapi(postIndexesBooksSearchRoute, postIndexesBooksSearchRouteHandler)
  .openapi(deleteIndexesBooksSettingsRoute, deleteIndexesBooksSettingsRouteHandler)
  .openapi(getIndexesBooksSettingsRoute, getIndexesBooksSettingsRouteHandler)
  .openapi(patchIndexesBooksSettingsRoute, patchIndexesBooksSettingsRouteHandler)
  .openapi(
    deleteIndexesBooksSettingsDisplayedAttributesRoute,
    deleteIndexesBooksSettingsDisplayedAttributesRouteHandler,
  )
  .openapi(
    getIndexesBooksSettingsDisplayedAttributesRoute,
    getIndexesBooksSettingsDisplayedAttributesRouteHandler,
  )
  .openapi(
    putIndexesBooksSettingsDisplayedAttributesRoute,
    putIndexesBooksSettingsDisplayedAttributesRouteHandler,
  )
  .openapi(
    deleteIndexesBooksSettingsDistinctAttributeRoute,
    deleteIndexesBooksSettingsDistinctAttributeRouteHandler,
  )
  .openapi(
    getIndexesBooksSettingsDistinctAttributeRoute,
    getIndexesBooksSettingsDistinctAttributeRouteHandler,
  )
  .openapi(
    putIndexesBooksSettingsDistinctAttributeRoute,
    putIndexesBooksSettingsDistinctAttributeRouteHandler,
  )
  .openapi(deleteIndexesBooksSettingsFacetingRoute, deleteIndexesBooksSettingsFacetingRouteHandler)
  .openapi(getIndexesBooksSettingsFacetingRoute, getIndexesBooksSettingsFacetingRouteHandler)
  .openapi(patchIndexesBooksSettingsFacetingRoute, patchIndexesBooksSettingsFacetingRouteHandler)
  .openapi(
    deleteIndexesBooksSettingsFilterableAttributesRoute,
    deleteIndexesBooksSettingsFilterableAttributesRouteHandler,
  )
  .openapi(
    getIndexesBooksSettingsFilterableAttributesRoute,
    getIndexesBooksSettingsFilterableAttributesRouteHandler,
  )
  .openapi(
    putIndexesBooksSettingsFilterableAttributesRoute,
    putIndexesBooksSettingsFilterableAttributesRouteHandler,
  )
  .openapi(
    deleteIndexesBooksSettingsPaginationRoute,
    deleteIndexesBooksSettingsPaginationRouteHandler,
  )
  .openapi(getIndexesBooksSettingsPaginationRoute, getIndexesBooksSettingsPaginationRouteHandler)
  .openapi(
    patchIndexesBooksSettingsPaginationRoute,
    patchIndexesBooksSettingsPaginationRouteHandler,
  )
  .openapi(
    deleteIndexesBooksSettingsRankingRulesRoute,
    deleteIndexesBooksSettingsRankingRulesRouteHandler,
  )
  .openapi(
    getIndexesBooksSettingsRankingRulesRoute,
    getIndexesBooksSettingsRankingRulesRouteHandler,
  )
  .openapi(
    putIndexesBooksSettingsRankingRulesRoute,
    putIndexesBooksSettingsRankingRulesRouteHandler,
  )
  .openapi(
    deleteIndexesBooksSettingsSearchableAttributesRoute,
    deleteIndexesBooksSettingsSearchableAttributesRouteHandler,
  )
  .openapi(
    getIndexesBooksSettingsSearchableAttributesRoute,
    getIndexesBooksSettingsSearchableAttributesRouteHandler,
  )
  .openapi(
    putIndexesBooksSettingsSearchableAttributesRoute,
    putIndexesBooksSettingsSearchableAttributesRouteHandler,
  )
  .openapi(
    deleteIndexesBooksSettingsSortableAttributesRoute,
    deleteIndexesBooksSettingsSortableAttributesRouteHandler,
  )
  .openapi(
    getIndexesBooksSettingsSortableAttributesRoute,
    getIndexesBooksSettingsSortableAttributesRouteHandler,
  )
  .openapi(
    putIndexesBooksSettingsSortableAttributesRoute,
    putIndexesBooksSettingsSortableAttributesRouteHandler,
  )
  .openapi(
    deleteIndexesBooksSettingsStopWordsRoute,
    deleteIndexesBooksSettingsStopWordsRouteHandler,
  )
  .openapi(getIndexesBooksSettingsStopWordsRoute, getIndexesBooksSettingsStopWordsRouteHandler)
  .openapi(putIndexesBooksSettingsStopWordsRoute, putIndexesBooksSettingsStopWordsRouteHandler)
  .openapi(deleteIndexesBooksSettingsSynonymsRoute, deleteIndexesBooksSettingsSynonymsRouteHandler)
  .openapi(getIndexesBooksSettingsSynonymsRoute, getIndexesBooksSettingsSynonymsRouteHandler)
  .openapi(putIndexesBooksSettingsSynonymsRoute, putIndexesBooksSettingsSynonymsRouteHandler)
  .openapi(
    deleteIndexesBooksSettingsTypoToleranceRoute,
    deleteIndexesBooksSettingsTypoToleranceRouteHandler,
  )
  .openapi(
    getIndexesBooksSettingsTypoToleranceRoute,
    getIndexesBooksSettingsTypoToleranceRouteHandler,
  )
  .openapi(
    patchIndexesBooksSettingsTypoToleranceRoute,
    patchIndexesBooksSettingsTypoToleranceRouteHandler,
  )
  .openapi(getIndexesBooksStatsRoute, getIndexesBooksStatsRouteHandler)
  .openapi(postIndexesSwapIndexesRoute, postIndexesSwapIndexesRouteHandler)
  .openapi(getKeysRoute, getKeysRouteHandler)
  .openapi(postKeysRoute, postKeysRouteHandler)
  .openapi(
    getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705Route,
    getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705RouteHandler,
  )
  .openapi(
    deleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bRoute,
    deleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bRouteHandler,
  )
  .openapi(
    patchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddRoute,
    patchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddRouteHandler,
  )
  .openapi(getStatsRoute, getStatsRouteHandler)
  .openapi(deleteTasksRoute, deleteTasksRouteHandler)
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(getTasks0Route, getTasks0RouteHandler)
  .openapi(postTasksCancelRoute, postTasksCancelRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)

export default app
