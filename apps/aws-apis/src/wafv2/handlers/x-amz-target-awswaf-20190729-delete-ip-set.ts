import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729DeleteIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729DeleteIpSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729DeleteIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
