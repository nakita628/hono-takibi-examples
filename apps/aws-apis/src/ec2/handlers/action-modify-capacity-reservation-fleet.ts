import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyCapacityReservationFleetRoute,
  postActionModifyCapacityReservationFleetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyCapacityReservationFleetHandler = app
  .openapi(getActionModifyCapacityReservationFleetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyCapacityReservationFleetRoute, (c) => {
    throw new Error('Not implemented')
  })
