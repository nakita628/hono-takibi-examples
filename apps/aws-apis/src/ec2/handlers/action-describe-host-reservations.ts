import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeHostReservationsRoute,
  postActionDescribeHostReservationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeHostReservationsHandler = app
  .openapi(getActionDescribeHostReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeHostReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
