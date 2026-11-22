import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
