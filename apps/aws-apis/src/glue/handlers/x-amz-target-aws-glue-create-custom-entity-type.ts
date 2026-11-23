import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateCustomEntityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateCustomEntityTypeHandler = app.openapi(
  postXAmzTargetAWSGlueCreateCustomEntityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
