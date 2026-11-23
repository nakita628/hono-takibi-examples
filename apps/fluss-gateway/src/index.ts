import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ClustersClusterDatabasesDatabaseRoute,
  deleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionRoute,
  deleteV1ClustersClusterDatabasesDatabaseTablesTableRoute,
  getHealthRoute,
  getReadyRoute,
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
} from './routes'
import {
  deleteV1ClustersClusterDatabasesDatabaseRouteHandler,
  deleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionRouteHandler,
  deleteV1ClustersClusterDatabasesDatabaseTablesTableRouteHandler,
  getHealthRouteHandler,
  getReadyRouteHandler,
  getV1ClustersClusterDatabasesDatabaseTablesRouteHandler,
  getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRouteHandler,
  getV1ClustersClusterDatabasesDatabaseTablesTableRouteHandler,
  getV1ClustersClusterDatabasesRouteHandler,
  getV1ClustersRouteHandler,
  getV1OpenapiJsonRouteHandler,
  patchV1ClustersClusterDatabasesDatabaseTablesTableRouteHandler,
  postV1ClustersClusterDatabasesDatabaseTablesRouteHandler,
  postV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRouteHandler,
  postV1ClustersClusterDatabasesDatabaseTablesTableRecordsRouteHandler,
  postV1ClustersClusterDatabasesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getReadyRoute, getReadyRouteHandler)
  .openapi(getV1ClustersRoute, getV1ClustersRouteHandler)
  .openapi(getV1ClustersClusterDatabasesRoute, getV1ClustersClusterDatabasesRouteHandler)
  .openapi(postV1ClustersClusterDatabasesRoute, postV1ClustersClusterDatabasesRouteHandler)
  .openapi(
    deleteV1ClustersClusterDatabasesDatabaseRoute,
    deleteV1ClustersClusterDatabasesDatabaseRouteHandler,
  )
  .openapi(
    getV1ClustersClusterDatabasesDatabaseTablesRoute,
    getV1ClustersClusterDatabasesDatabaseTablesRouteHandler,
  )
  .openapi(
    postV1ClustersClusterDatabasesDatabaseTablesRoute,
    postV1ClustersClusterDatabasesDatabaseTablesRouteHandler,
  )
  .openapi(
    deleteV1ClustersClusterDatabasesDatabaseTablesTableRoute,
    deleteV1ClustersClusterDatabasesDatabaseTablesTableRouteHandler,
  )
  .openapi(
    getV1ClustersClusterDatabasesDatabaseTablesTableRoute,
    getV1ClustersClusterDatabasesDatabaseTablesTableRouteHandler,
  )
  .openapi(
    patchV1ClustersClusterDatabasesDatabaseTablesTableRoute,
    patchV1ClustersClusterDatabasesDatabaseTablesTableRouteHandler,
  )
  .openapi(
    getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute,
    getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRouteHandler,
  )
  .openapi(
    postV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute,
    postV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRouteHandler,
  )
  .openapi(
    deleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionRoute,
    deleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionRouteHandler,
  )
  .openapi(
    postV1ClustersClusterDatabasesDatabaseTablesTableRecordsRoute,
    postV1ClustersClusterDatabasesDatabaseTablesTableRecordsRouteHandler,
  )
  .openapi(getV1OpenapiJsonRoute, getV1OpenapiJsonRouteHandler)

export default app
