import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetCustomEntityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetCustomEntityTypeHandler = app.openapi(
  postXAmzTargetAWSGlueGetCustomEntityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
