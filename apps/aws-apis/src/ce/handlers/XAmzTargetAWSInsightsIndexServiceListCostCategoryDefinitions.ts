import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
