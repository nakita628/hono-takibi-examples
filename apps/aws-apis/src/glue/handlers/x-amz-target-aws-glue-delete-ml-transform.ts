import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteMLTransformRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteMlTransformHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteMLTransformRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
