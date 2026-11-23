import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024ImportAppCatalogHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
