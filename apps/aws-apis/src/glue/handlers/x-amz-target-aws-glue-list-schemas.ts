import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListSchemasHandler = app.openapi(
  postXAmzTargetAWSGlueListSchemasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
