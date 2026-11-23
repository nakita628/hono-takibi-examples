import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceDeleteCostCategoryDefinitionHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
