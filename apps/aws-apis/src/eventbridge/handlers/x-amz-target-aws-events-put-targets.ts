import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsPutTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsPutTargetsHandler = app.openapi(
  postXAmzTargetAWSEventsPutTargetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
