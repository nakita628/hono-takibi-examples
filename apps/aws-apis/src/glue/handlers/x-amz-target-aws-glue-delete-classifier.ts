import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteClassifierRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteClassifierHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteClassifierRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
