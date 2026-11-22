import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJobHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
