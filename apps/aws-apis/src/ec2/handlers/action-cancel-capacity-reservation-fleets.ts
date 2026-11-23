import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCancelCapacityReservationFleetsRoute,
  postActionCancelCapacityReservationFleetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCancelCapacityReservationFleetsHandler = app
  .openapi(getActionCancelCapacityReservationFleetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelCapacityReservationFleetsRoute, (c) => {
    throw new Error('Not implemented')
  })
