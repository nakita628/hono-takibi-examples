import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024LaunchAppRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024LaunchAppHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024LaunchAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
