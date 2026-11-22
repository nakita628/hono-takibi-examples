import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyCapacityReservationRoute,
  postActionModifyCapacityReservationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyCapacityReservationHandler = app
  .openapi(getActionModifyCapacityReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyCapacityReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
