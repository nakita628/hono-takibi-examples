import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GetAppRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024GetAppHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024GetAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
