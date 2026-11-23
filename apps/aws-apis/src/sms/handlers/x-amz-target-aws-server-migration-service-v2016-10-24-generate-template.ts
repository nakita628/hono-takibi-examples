import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024GenerateTemplateHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
