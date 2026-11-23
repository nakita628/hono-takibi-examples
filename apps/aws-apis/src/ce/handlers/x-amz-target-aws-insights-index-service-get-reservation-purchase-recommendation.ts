import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetReservationPurchaseRecommendationHandler =
  app.openapi(
    postXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
