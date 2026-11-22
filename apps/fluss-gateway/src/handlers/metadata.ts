import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ClustersClusterDatabasesDatabaseTablesRoute,
  getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute,
  getV1ClustersClusterDatabasesDatabaseTablesTableRoute,
  getV1ClustersClusterDatabasesRoute,
  getV1ClustersRoute,
  getV1OpenapiJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getV1ClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterDatabasesDatabaseTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterDatabasesDatabaseTablesTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
