import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateCapacityReservationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaUpdateCapacityReservationHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateCapacityReservationRoute,
  (c) => {},
)
