import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteSchemaHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
