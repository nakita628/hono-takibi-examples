import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729CreateIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729CreateIpSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729CreateIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
