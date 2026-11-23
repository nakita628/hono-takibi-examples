import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPsd2RegistrationsIdPsd2registrationLogsRoute,
  getPsd2RegistrationsIdPsd2RegistrationRoute,
  getPsd2RegistrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const psd2RegistrationsHandler = app
  .openapi(getPsd2RegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPsd2RegistrationsIdPsd2RegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPsd2RegistrationsIdPsd2registrationLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
