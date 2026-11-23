import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetSampledRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729GetSampledRequestsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetSampledRequestsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
