import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHardwareReservationsIdRoute,
  getProjectsIdHardwareReservationsRoute,
  postHardwareReservationsIdActivateRoute,
  postHardwareReservationsIdMoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hardwareReservationsHandler = app
  .openapi(getHardwareReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHardwareReservationsIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHardwareReservationsIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdHardwareReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
