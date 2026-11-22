import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalogHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
