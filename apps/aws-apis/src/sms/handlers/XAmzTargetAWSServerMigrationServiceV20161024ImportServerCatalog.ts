import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalogHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
