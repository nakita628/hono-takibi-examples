import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListCapacityReservationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListCapacityReservationsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListCapacityReservationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
