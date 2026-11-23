import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024GetReplicationRunsHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
