import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatasetIndexRoute,
  deleteDatasetPkColumnColumnIdRoute,
  deleteDatasetPkMetricMetricIdRoute,
  deleteDatasetPkRoute,
  getDatasetDistinctColumnNameRoute,
  getDatasetExportIndexRoute,
  getDatasetIndexRoute,
  getDatasetInfoRoute,
  getDatasetPkRelatedObjectsRoute,
  getDatasetPkRoute,
  getDatasetRelatedColumnNameRoute,
  postDatasetImportIndexRoute,
  postDatasetIndexRoute,
  putDatasetPkRefreshRoute,
  putDatasetPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetHandler = app
  .openapi(deleteDatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetDistinctColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasetImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasetPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatasetPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasetPkColumnColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasetPkMetricMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatasetPkRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetPkRelatedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
