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
  patchIndexesIndexUidRoute,
  patchIndexesIndexUidSettingsEmbeddersRoute,
  patchIndexesIndexUidSettingsFacetingRoute,
  patchIndexesIndexUidSettingsPaginationRoute,
  patchIndexesIndexUidSettingsRoute,
  patchIndexesIndexUidSettingsTypoToleranceRoute,
  postIndexesIndexUidDeleteBatchRoute,
  postIndexesIndexUidDocumentsDeleteRoute,
  postIndexesIndexUidDocumentsEditRoute,
  postIndexesIndexUidDocumentsFetchRoute,
  postIndexesIndexUidDocumentsRoute,
  postIndexesIndexUidFacetSearchRoute,
  postIndexesIndexUidSearchRoute,
  postIndexesIndexUidSimilarRoute,
  postIndexesRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const indexesHandler = app
  .openapi(getIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesIndexUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidDeleteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidDocumentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidDocumentsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidDocumentsFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidFacetSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesIndexUidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsDictionaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsDictionaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsDictionaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsDisplayedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsDisplayedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsDisplayedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsDistinctAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsDistinctAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsDistinctAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsEmbeddersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsEmbeddersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesIndexUidSettingsEmbeddersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsFacetSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsFacetSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsFacetSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsFacetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsFacetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesIndexUidSettingsFacetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsFilterableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsFilterableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsFilterableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsLocalizedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsLocalizedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsLocalizedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsNonSeparatorTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsNonSeparatorTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsNonSeparatorTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsPaginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsPaginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesIndexUidSettingsPaginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsPrefixSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsPrefixSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsPrefixSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsProximityPrecisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsProximityPrecisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsProximityPrecisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsRankingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsRankingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsRankingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsSearchCutoffMsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsSearchCutoffMsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsSearchCutoffMsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsSearchableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsSearchableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsSearchableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsSeparatorTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsSeparatorTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsSeparatorTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsSortableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsSortableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsSortableAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsStopWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsStopWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsStopWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidSettingsSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSettingsTypoToleranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidSettingsTypoToleranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesIndexUidSettingsTypoToleranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
