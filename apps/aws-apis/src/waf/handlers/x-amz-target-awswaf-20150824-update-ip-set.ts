import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824UpdateIpSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
