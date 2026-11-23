import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteTableHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
