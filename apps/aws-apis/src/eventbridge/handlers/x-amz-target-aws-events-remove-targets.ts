import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsRemoveTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsRemoveTargetsHandler = app.openapi(
  postXAmzTargetAWSEventsRemoveTargetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
