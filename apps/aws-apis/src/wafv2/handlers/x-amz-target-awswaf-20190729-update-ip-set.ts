import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729UpdateIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729UpdateIpSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729UpdateIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
