import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024GetReplicationJobsHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
