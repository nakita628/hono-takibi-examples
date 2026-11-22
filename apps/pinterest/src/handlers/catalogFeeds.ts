import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCatalogsFeedsFeedIdRoute,
  deleteCatalogsSupplementalFeedsFeedIdRoute,
  getCatalogsFeedsFeedIdProcessingResultsRoute,
  getCatalogsFeedsFeedIdRoute,
  getCatalogsFeedsRoute,
  getCatalogsProcessingResultsProcessingResultIdItemIssuesRoute,
  getCatalogsSupplementalFeedsFeedIdRoute,
  getCatalogsSupplementalFeedsRoute,
  patchCatalogsFeedsFeedIdRoute,
  patchCatalogsSupplementalFeedsFeedIdRoute,
  postCatalogsFeedsFeedIdIngestRoute,
  postCatalogsFeedsRoute,
  postCatalogsSupplementalFeedsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogFeedsHandler = app
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
  .openapi(getCatalogsProcessingResultsProcessingResultIdItemIssuesRoute, (c) => {
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
