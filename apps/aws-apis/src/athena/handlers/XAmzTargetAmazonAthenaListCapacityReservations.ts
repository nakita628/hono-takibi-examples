import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListCapacityReservationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListCapacityReservationsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListCapacityReservationsRoute,
  (c) => {},
)
