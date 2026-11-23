import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCreatePartnerEventSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsCreatePartnerEventSourceHandler = app.openapi(
  postXAmzTargetAWSEventsCreatePartnerEventSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
