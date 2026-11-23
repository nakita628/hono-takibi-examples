import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateClassifierRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateClassifierHandler = app.openapi(
  postXAmzTargetAWSGlueCreateClassifierRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
