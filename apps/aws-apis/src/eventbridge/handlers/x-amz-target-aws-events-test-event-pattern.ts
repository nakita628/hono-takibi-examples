import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsTestEventPatternRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsTestEventPatternHandler = app.openapi(
  postXAmzTargetAWSEventsTestEventPatternRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
