import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumberReservationsNumberReservationIdRoute,
  getNumberReservationsRoute,
  postNumberReservationsNumberReservationIdActionsExtendRoute,
  postNumberReservationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberReservationsHandler = app
  .openapi(getNumberReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNumberReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberReservationsNumberReservationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNumberReservationsNumberReservationIdActionsExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
