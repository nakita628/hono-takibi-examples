import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GetConnectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024GetConnectorsHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024GetConnectorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
