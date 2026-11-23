import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteCustomEntityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteCustomEntityTypeHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteCustomEntityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
