import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateCapacityReservationRoute,
  postActionCreateCapacityReservationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateCapacityReservationHandler = app
  .openapi(getActionCreateCapacityReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCapacityReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
