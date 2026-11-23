import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListMLTransformsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListMlTransformsHandler = app.openapi(
  postXAmzTargetAWSGlueListMLTransformsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
