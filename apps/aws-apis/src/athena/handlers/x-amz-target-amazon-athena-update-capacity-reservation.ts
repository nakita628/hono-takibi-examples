import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateCapacityReservationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaUpdateCapacityReservationHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateCapacityReservationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
