import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsPutPartnerEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsPutPartnerEventsHandler = app.openapi(
  postXAmzTargetAWSEventsPutPartnerEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
