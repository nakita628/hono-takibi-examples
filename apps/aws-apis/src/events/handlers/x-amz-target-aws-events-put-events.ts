import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsPutEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsPutEventsHandler = app.openapi(
  postXAmzTargetAWSEventsPutEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
