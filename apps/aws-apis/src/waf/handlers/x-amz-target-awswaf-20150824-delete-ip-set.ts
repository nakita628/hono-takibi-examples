import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824DeleteIpSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
