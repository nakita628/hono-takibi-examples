import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetCapacityReservationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetCapacityReservationHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetCapacityReservationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
