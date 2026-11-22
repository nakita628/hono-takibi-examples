import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetCostCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetCostCategoriesHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetCostCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
