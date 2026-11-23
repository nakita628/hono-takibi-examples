import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetConnectionHandler = app.openapi(
  postXAmzTargetAWSGlueGetConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
