import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceUpdateCostCategoryDefinitionHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
