import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartJobRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStartJobRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartJobRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
