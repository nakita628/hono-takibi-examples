import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSEventsListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
