import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ClustersClusterDatabasesDatabaseTablesTableRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app.openapi(
  postV1ClustersClusterDatabasesDatabaseTablesTableRecordsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
