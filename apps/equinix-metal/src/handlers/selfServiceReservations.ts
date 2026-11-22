import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectIdSelfServiceReservationsIdRoute,
  getProjectsProjectIdSelfServiceReservationsRoute,
  postProjectsProjectIdSelfServiceReservationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const selfServiceReservationsHandler = app
  .openapi(getProjectsProjectIdSelfServiceReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdSelfServiceReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdSelfServiceReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
