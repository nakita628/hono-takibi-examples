import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729GetIpSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
