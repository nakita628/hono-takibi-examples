import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsTagResourceHandler = app.openapi(
  postXAmzTargetAWSEventsTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
