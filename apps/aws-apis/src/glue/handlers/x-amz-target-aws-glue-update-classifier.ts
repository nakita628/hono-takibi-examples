import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateClassifierRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateClassifierHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateClassifierRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
