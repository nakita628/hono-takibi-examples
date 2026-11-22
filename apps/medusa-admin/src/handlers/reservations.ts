import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminReservationsIdRoute,
  getAdminReservationsIdRoute,
  getAdminReservationsRoute,
  postAdminReservationsIdRoute,
  postAdminReservationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reservationsHandler = app
  .openapi(getAdminReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
