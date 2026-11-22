import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteSubnetCidrReservationRoute,
  postActionDeleteSubnetCidrReservationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteSubnetCidrReservationHandler = app
  .openapi(getActionDeleteSubnetCidrReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSubnetCidrReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
