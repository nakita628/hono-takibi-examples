import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetSavingsPlansPurchaseRecommendationHandler =
  app.openapi(
    postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
