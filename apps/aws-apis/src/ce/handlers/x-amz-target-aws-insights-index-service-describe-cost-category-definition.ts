import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceDescribeCostCategoryDefinitionHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
