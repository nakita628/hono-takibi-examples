import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDataflowGraphRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetDataflowGraphHandler = app.openapi(
  postXAmzTargetAWSGlueGetDataflowGraphRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
