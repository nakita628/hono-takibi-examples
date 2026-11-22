import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCancelCapacityReservationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaCancelCapacityReservationHandler = app.openapi(
  postXAmzTargetAmazonAthenaCancelCapacityReservationRoute,
  (c) => {},
)
