import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetTriggersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetTriggersHandler = app.openapi(
  postXAmzTargetAWSGlueGetTriggersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
