import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCancelReplayRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsCancelReplayHandler = app.openapi(
  postXAmzTargetAWSEventsCancelReplayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
