import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteSchemaVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteSchemaVersionsHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteSchemaVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
