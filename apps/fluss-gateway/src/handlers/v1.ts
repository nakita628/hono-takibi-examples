import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ClustersClusterDatabasesDatabaseRoute,
  deleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionRoute,
  deleteV1ClustersClusterDatabasesDatabaseTablesTableRoute,
  getV1ClustersClusterDatabasesDatabaseTablesRoute,
  getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute,
  getV1ClustersClusterDatabasesDatabaseTablesTableRoute,
  getV1ClustersClusterDatabasesRoute,
  getV1ClustersRoute,
  getV1OpenapiJsonRoute,
  patchV1ClustersClusterDatabasesDatabaseTablesTableRoute,
  postV1ClustersClusterDatabasesDatabaseTablesRoute,
  postV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute,
  postV1ClustersClusterDatabasesDatabaseTablesTableRecordsRoute,
  postV1ClustersClusterDatabasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1ClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ClustersClusterDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ClustersClusterDatabasesDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterDatabasesDatabaseTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ClustersClusterDatabasesDatabaseTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ClustersClusterDatabasesDatabaseTablesTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterDatabasesDatabaseTablesTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ClustersClusterDatabasesDatabaseTablesTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ClustersClusterDatabasesDatabaseTablesTableRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
