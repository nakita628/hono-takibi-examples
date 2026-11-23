import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
