import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreateCapacityReservationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaCreateCapacityReservationHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreateCapacityReservationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
