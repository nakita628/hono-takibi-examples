import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateSubnetCidrReservationRoute,
  postActionCreateSubnetCidrReservationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateSubnetCidrReservationHandler = app
  .openapi(getActionCreateSubnetCidrReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateSubnetCidrReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
