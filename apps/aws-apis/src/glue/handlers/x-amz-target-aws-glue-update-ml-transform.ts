import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateMLTransformRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateMlTransformHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateMLTransformRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
