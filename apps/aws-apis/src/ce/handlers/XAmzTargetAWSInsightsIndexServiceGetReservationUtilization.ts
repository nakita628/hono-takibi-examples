import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetReservationUtilizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetReservationUtilizationHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetReservationUtilizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
