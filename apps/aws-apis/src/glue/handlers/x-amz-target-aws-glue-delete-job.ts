import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteJobHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
