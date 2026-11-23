import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListTriggersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListTriggersHandler = app.openapi(
  postXAmzTargetAWSGlueListTriggersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
