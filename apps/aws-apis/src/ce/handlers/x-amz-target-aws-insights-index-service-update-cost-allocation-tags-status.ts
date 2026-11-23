import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceUpdateCostAllocationTagsStatusHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
