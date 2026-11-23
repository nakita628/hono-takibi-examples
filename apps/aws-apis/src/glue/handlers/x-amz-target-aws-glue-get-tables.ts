import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetTablesHandler = app.openapi(
  postXAmzTargetAWSGlueGetTablesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
