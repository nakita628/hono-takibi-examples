import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCancelCapacityReservationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaCancelCapacityReservationHandler = app.openapi(
  postXAmzTargetAmazonAthenaCancelCapacityReservationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
