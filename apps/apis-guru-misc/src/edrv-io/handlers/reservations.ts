import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ReservationsIdRoute,
  getV1ReservationsRoute,
  patchV1ReservationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reservationsHandler = app
  .openapi(getV1ReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
