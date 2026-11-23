import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceListCostCategoryDefinitionsHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
