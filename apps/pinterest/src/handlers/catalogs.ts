import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCatalogsCatalogIdCountryLocaleMappingRoute,
  deleteCatalogsCatalogIdLocalStoresRoute,
  deleteCatalogsFeedsFeedIdRoute,
  deleteCatalogsProductGroupsMultipleRoute,
  deleteCatalogsProductGroupsProductGroupIdRoute,
  deleteCatalogsSupplementalFeedsFeedIdRoute,
  getCatalogsAvailableFilterValuesRoute,
  getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdRoute,
  getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsRoute,
  getCatalogsCatalogIdCountryLocaleMappingRoute,
  getCatalogsCatalogIdLocalStoresRoute,
  getCatalogsCatalogIdSupplementalItemsBatchBatchIdRoute,
  getCatalogsFeedsFeedIdProcessingResultsRoute,
  getCatalogsFeedsFeedIdRoute,
  getCatalogsFeedsRoute,
  getCatalogsItemsBatchBatchIdRoute,
  getCatalogsProcessingResultsProcessingResultIdItemIssuesRoute,
  getCatalogsProductGroupsProductGroupIdProductCountsRoute,
  getCatalogsProductGroupsProductGroupIdProductsRoute,
  getCatalogsProductGroupsProductGroupIdRoute,
  getCatalogsProductGroupsRoute,
  getCatalogsReportsRoute,
  getCatalogsReportsStatsRoute,
  getCatalogsRoute,
  getCatalogsSupplementalFeedsFeedIdRoute,
  getCatalogsSupplementalFeedsRoute,
  patchCatalogsCatalogIdLocalStoresRoute,
  patchCatalogsCatalogIdRoute,
  patchCatalogsFeedsFeedIdRoute,
  patchCatalogsProductGroupsProductGroupIdRoute,
  patchCatalogsSupplementalFeedsFeedIdRoute,
  postCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewRoute,
  postCatalogsCatalogIdAutoLocalizationConfigsRoute,
  postCatalogsCatalogIdLocalInventoryItemsBatchRoute,
  postCatalogsCatalogIdLocalInventoryItemsQueryRoute,
  postCatalogsCatalogIdLocalStoresRoute,
  postCatalogsFeedsFeedIdIngestRoute,
  postCatalogsFeedsRoute,
  postCatalogsItemsBatchRoute,
  postCatalogsItemsRoute,
  postCatalogsProductGroupsMultipleRoute,
  postCatalogsProductGroupsRoute,
  postCatalogsProductsGetByProductGroupFiltersRoute,
  postCatalogsReportsRoute,
  postCatalogsRoute,
  postCatalogsSupplementalFeedsRoute,
  putCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdRoute,
  putCatalogsCatalogIdCountryLocaleMappingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogsHandler = app
  .openapi(getCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsAvailableFilterValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCatalogsFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsFeedsFeedIdIngestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsFeedsFeedIdProcessingResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsItemsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsItemsBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsProcessingResultsProcessingResultIdItemIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsProductGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsProductGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsProductGroupsMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsProductGroupsMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsProductGroupsProductGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCatalogsProductGroupsProductGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsProductGroupsProductGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsProductGroupsProductGroupIdProductCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsProductGroupsProductGroupIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsProductsGetByProductGroupFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsReportsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsSupplementalFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsSupplementalFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsSupplementalFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCatalogsSupplementalFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsSupplementalFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCatalogsCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsCatalogIdAutoLocalizationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCatalogsCatalogIdCountryLocaleMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCatalogsCatalogIdCountryLocaleMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsCatalogIdCountryLocaleMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsCatalogIdLocalInventoryItemsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsCatalogIdLocalInventoryItemsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsCatalogIdLocalStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsCatalogIdLocalStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCatalogsCatalogIdLocalStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsCatalogIdLocalStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsCatalogIdSupplementalItemsBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
