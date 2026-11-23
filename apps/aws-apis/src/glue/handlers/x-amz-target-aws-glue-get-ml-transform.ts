import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetMLTransformRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetMlTransformHandler = app.openapi(
  postXAmzTargetAWSGlueGetMLTransformRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
