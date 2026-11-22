import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetSubnetCidrReservationsRoute,
  postActionGetSubnetCidrReservationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetSubnetCidrReservationsHandler = app
  .openapi(getActionGetSubnetCidrReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSubnetCidrReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
