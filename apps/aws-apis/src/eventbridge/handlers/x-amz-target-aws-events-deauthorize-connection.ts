import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeauthorizeConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDeauthorizeConnectionHandler = app.openapi(
  postXAmzTargetAWSEventsDeauthorizeConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
