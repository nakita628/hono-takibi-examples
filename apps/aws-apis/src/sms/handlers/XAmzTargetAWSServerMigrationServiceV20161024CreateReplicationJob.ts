import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJobHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
