import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024StopAppReplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024StopAppReplicationHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024StopAppReplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
