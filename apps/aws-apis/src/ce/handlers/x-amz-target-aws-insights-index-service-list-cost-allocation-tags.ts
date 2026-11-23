import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceListCostAllocationTagsHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
