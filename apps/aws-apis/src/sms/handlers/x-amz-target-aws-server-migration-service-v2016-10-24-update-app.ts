import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024UpdateAppRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024UpdateAppHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024UpdateAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
