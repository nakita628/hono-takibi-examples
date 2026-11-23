import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDeleteConnectionHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
