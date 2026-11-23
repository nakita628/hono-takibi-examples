import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetGroupsForCapacityReservationRoute,
  postActionGetGroupsForCapacityReservationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetGroupsForCapacityReservationHandler = app
  .openapi(getActionGetGroupsForCapacityReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetGroupsForCapacityReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
