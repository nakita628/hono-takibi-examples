import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024StartAppReplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024StartAppReplicationHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024StartAppReplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
