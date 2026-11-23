import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteConnectionHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
