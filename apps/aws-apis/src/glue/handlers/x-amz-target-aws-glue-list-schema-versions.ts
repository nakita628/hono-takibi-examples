import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListSchemaVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListSchemaVersionsHandler = app.openapi(
  postXAmzTargetAWSGlueListSchemaVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
