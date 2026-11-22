import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ClustersClusterDatabasesDatabaseRoute,
  deleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionRoute,
  deleteV1ClustersClusterDatabasesDatabaseTablesTableRoute,
  patchV1ClustersClusterDatabasesDatabaseTablesTableRoute,
  postV1ClustersClusterDatabasesDatabaseTablesRoute,
  postV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute,
  postV1ClustersClusterDatabasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ddlHandler = app
  .openapi(postV1ClustersClusterDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ClustersClusterDatabasesDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ClustersClusterDatabasesDatabaseTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ClustersClusterDatabasesDatabaseTablesTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ClustersClusterDatabasesDatabaseTablesTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
