import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
