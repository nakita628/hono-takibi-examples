import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateSchemaHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
