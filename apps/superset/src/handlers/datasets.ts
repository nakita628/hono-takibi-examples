import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1DatasetIndexRoute,
  deleteApiV1DatasetPkColumnColumnIdRoute,
  deleteApiV1DatasetPkMetricMetricIdRoute,
  deleteApiV1DatasetPkRoute,
  getApiV1DatasetDistinctColumnNameRoute,
  getApiV1DatasetExportIndexRoute,
  getApiV1DatasetIdOrUuidRelatedObjectsRoute,
  getApiV1DatasetIdOrUuidRoute,
  getApiV1DatasetIndexRoute,
  getApiV1DatasetInfoRoute,
  getApiV1DatasetPkDrillInfoIndexRoute,
  getApiV1DatasetRelatedColumnNameRoute,
  getApiV1DatasetRelatedObjectsIndexRoute,
  getApiV1DatasetUuidPurgeImpactRoute,
  getApiV1DatasetUuidStrActivityIndexRoute,
  getApiV1DatasetUuidStrVersionsIndexRoute,
  getApiV1DatasetUuidStrVersionsVersionUuidStrIndexRoute,
  postApiV1DatasetDuplicateRoute,
  postApiV1DatasetGetOrCreateIndexRoute,
  postApiV1DatasetImportIndexRoute,
  postApiV1DatasetIndexRoute,
  postApiV1DatasetPkPartitionMappingPreviewIndexRoute,
  postApiV1DatasetUuidPurgeRoute,
  postApiV1DatasetUuidRestoreRoute,
  postApiV1DatasetUuidStrVersionsVersionUuidStrRestoreRoute,
  putApiV1DatasetPkRefreshRoute,
  putApiV1DatasetPkRoute,
  putApiV1DatasetWarmUpCacheRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(deleteApiV1DatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetDistinctColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetGetOrCreateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetRelatedObjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DatasetWarmUpCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetIdOrUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetIdOrUuidRelatedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DatasetPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DatasetPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DatasetPkColumnColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetPkDrillInfoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DatasetPkMetricMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetPkPartitionMappingPreviewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DatasetPkRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetUuidStrActivityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetUuidStrVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetUuidStrVersionsVersionUuidStrIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetUuidStrVersionsVersionUuidStrRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetUuidPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetUuidPurgeImpactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetUuidRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
