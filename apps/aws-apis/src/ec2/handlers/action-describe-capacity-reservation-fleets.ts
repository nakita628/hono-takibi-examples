import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeCapacityReservationFleetsRoute,
  postActionDescribeCapacityReservationFleetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeCapacityReservationFleetsHandler = app
  .openapi(getActionDescribeCapacityReservationFleetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCapacityReservationFleetsRoute, (c) => {
    throw new Error('Not implemented')
  })
