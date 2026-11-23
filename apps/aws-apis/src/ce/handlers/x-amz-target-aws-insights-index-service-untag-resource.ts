import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceUntagResourceHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
