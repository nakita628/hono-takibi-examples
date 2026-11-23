import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateCapacityReservationFleetRoute,
  postActionCreateCapacityReservationFleetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateCapacityReservationFleetHandler = app
  .openapi(getActionCreateCapacityReservationFleetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCapacityReservationFleetRoute, (c) => {
    throw new Error('Not implemented')
  })
