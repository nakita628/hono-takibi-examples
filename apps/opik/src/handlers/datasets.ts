import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateDatasetsIdRoute,
  deleteV1PrivateDatasetsIdVersionsVersionHashTagsTagRoute,
  getV1PrivateDatasetsExportJobsJobIdDownloadRoute,
  getV1PrivateDatasetsExportJobsJobIdRoute,
  getV1PrivateDatasetsExportJobsRoute,
  getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsRoute,
  getV1PrivateDatasetsIdItemsExperimentsItemsRoute,
  getV1PrivateDatasetsIdItemsExperimentsItemsStatsRoute,
  getV1PrivateDatasetsIdItemsRoute,
  getV1PrivateDatasetsIdRoute,
  getV1PrivateDatasetsIdVersionsDiffRoute,
  getV1PrivateDatasetsIdVersionsHashVersionHashRoute,
  getV1PrivateDatasetsIdVersionsRoute,
  getV1PrivateDatasetsItemsItemIdRoute,
  getV1PrivateDatasetsRoute,
  patchV1PrivateDatasetsIdVersionsHashVersionHashRoute,
  patchV1PrivateDatasetsItemsBatchRoute,
  patchV1PrivateDatasetsItemsItemIdRoute,
  postV1PrivateDatasetsDatasetIdItemsFromSpansRoute,
  postV1PrivateDatasetsDatasetIdItemsFromTracesRoute,
  postV1PrivateDatasetsDeleteBatchRoute,
  postV1PrivateDatasetsDeleteRoute,
  postV1PrivateDatasetsIdExpansionsRoute,
  postV1PrivateDatasetsIdExportRoute,
  postV1PrivateDatasetsIdItemsChangesRoute,
  postV1PrivateDatasetsIdVersionsHashVersionHashTagsRoute,
  postV1PrivateDatasetsIdVersionsRestoreRoute,
  postV1PrivateDatasetsIdVersionsRetrieveRoute,
  postV1PrivateDatasetsItemsDeleteRoute,
  postV1PrivateDatasetsItemsFromCsvRoute,
  postV1PrivateDatasetsItemsFromJsonRoute,
  postV1PrivateDatasetsItemsStreamRoute,
  postV1PrivateDatasetsRetrieveRoute,
  postV1PrivateDatasetsRoute,
  putV1PrivateDatasetsExportJobsJobIdMarkViewedRoute,
  putV1PrivateDatasetsIdRoute,
  putV1PrivateDatasetsItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(postV1PrivateDatasetsIdItemsChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateDatasetsItemsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateDatasetsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsItemsFromCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsItemsFromJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsDatasetIdItemsFromSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsDatasetIdItemsFromTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateDatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateDatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsItemsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsDeleteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsExportJobsJobIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdExpansionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdItemsExperimentsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdItemsExperimentsItemsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsExportJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsExportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateDatasetsItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateDatasetsExportJobsJobIdMarkViewedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsItemsStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdVersionsDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdVersionsHashVersionHashTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateDatasetsIdVersionsVersionHashTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdVersionsHashVersionHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateDatasetsIdVersionsHashVersionHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdVersionsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdVersionsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
