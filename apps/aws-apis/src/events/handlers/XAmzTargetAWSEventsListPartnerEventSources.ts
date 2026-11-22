import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListPartnerEventSourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsListPartnerEventSourcesHandler = app.openapi(
  postXAmzTargetAWSEventsListPartnerEventSourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
