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
  patchIndexesBooksRoute,
  patchIndexesBooksSettingsFacetingRoute,
  patchIndexesBooksSettingsPaginationRoute,
  patchIndexesBooksSettingsRoute,
  patchIndexesBooksSettingsTypoToleranceRoute,
  postIndexesBooksDocumentsDeleteBatchRoute,
  postIndexesBooksDocumentsRoute,
  postIndexesBooksSearchRoute,
  postIndexesRoute,
  postIndexesSwapIndexesRoute,
  putIndexesBooksDocumentsRoute,
  putIndexesBooksSettingsDisplayedAttributesRoute,
  putIndexesBooksSettingsDistinctAttributeRoute,
  putIndexesBooksSettingsFilterableAttributesRoute,
  putIndexesBooksSettingsRankingRulesRoute,
  putIndexesBooksSettingsSearchableAttributesRoute,
  putIndexesBooksSettingsSortableAttributesRoute,
  putIndexesBooksSettingsStopWordsRoute,
  putIndexesBooksSettingsSynonymsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexesHandler = app
  .openapi(getIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesBooksDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesBooksDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksDocuments1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksDocuments2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesBooksDocumentsDeleteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesBooksSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesBooksSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsDisplayedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsDisplayedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesBooksSettingsDisplayedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsDistinctAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsDistinctAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesBooksSettingsDistinctAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsFacetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsFacetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesBooksSettingsFacetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsFilterableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsFilterableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesBooksSettingsFilterableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsPaginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsPaginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesBooksSettingsPaginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsRankingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsRankingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesBooksSettingsRankingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsSearchableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsSearchableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesBooksSettingsSearchableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsSortableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsSortableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesBooksSettingsSortableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsStopWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsStopWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesBooksSettingsStopWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesBooksSettingsSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksSettingsTypoToleranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksSettingsTypoToleranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesBooksSettingsTypoToleranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesSwapIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
