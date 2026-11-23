import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCancelCapacityReservationRoute,
  postActionCancelCapacityReservationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCancelCapacityReservationHandler = app
  .openapi(getActionCancelCapacityReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelCapacityReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
