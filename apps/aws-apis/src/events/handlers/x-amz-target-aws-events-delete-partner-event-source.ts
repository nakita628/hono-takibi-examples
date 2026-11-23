import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeletePartnerEventSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDeletePartnerEventSourceHandler = app.openapi(
  postXAmzTargetAWSEventsDeletePartnerEventSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
