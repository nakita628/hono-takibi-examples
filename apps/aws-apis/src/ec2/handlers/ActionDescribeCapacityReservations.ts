import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeCapacityReservationsRoute,
  postActionDescribeCapacityReservationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeCapacityReservationsHandler = app
  .openapi(getActionDescribeCapacityReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCapacityReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
