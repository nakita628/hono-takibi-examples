import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreateCapacityReservationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaCreateCapacityReservationHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreateCapacityReservationRoute,
  (c) => {},
)
