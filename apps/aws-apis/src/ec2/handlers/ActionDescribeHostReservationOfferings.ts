import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeHostReservationOfferingsRoute,
  postActionDescribeHostReservationOfferingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeHostReservationOfferingsHandler = app
  .openapi(getActionDescribeHostReservationOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeHostReservationOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
