import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetTableHandler = app.openapi(
  postXAmzTargetAWSGlueGetTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
