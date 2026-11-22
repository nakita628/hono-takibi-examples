import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSetHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
