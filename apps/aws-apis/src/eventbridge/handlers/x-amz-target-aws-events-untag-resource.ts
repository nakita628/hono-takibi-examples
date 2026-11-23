import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsUntagResourceHandler = app.openapi(
  postXAmzTargetAWSEventsUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
