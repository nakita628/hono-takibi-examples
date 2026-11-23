import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListPartnerEventSourceAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsListPartnerEventSourceAccountsHandler = app.openapi(
  postXAmzTargetAWSEventsListPartnerEventSourceAccountsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
