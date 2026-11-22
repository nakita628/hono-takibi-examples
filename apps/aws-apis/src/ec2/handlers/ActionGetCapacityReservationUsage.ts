import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetCapacityReservationUsageRoute,
  postActionGetCapacityReservationUsageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetCapacityReservationUsageHandler = app
  .openapi(getActionGetCapacityReservationUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetCapacityReservationUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
