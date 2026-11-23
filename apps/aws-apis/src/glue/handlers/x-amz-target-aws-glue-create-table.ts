import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateTableHandler = app.openapi(
  postXAmzTargetAWSGlueCreateTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
