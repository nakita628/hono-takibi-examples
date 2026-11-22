import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GetServersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024GetServersHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024GetServersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
