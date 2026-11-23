import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824CreateIpSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
