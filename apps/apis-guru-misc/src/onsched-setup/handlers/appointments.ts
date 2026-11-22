import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSetupV1AppointmentsIdRoute,
  getSetupV1AppointmentsRoute,
  putSetupV1AppointmentsIdReassignResourceResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appointmentsHandler = app
  .openapi(getSetupV1AppointmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1AppointmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1AppointmentsIdReassignResourceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
