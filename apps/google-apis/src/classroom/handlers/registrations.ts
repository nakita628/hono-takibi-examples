import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1RegistrationsRegistrationIdRoute, postV1RegistrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const registrationsHandler = app
  .openapi(postV1RegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RegistrationsRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
