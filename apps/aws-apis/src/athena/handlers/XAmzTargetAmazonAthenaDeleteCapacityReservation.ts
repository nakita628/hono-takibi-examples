import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaDeleteCapacityReservationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaDeleteCapacityReservationHandler = app.openapi(
  postXAmzTargetAmazonAthenaDeleteCapacityReservationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
