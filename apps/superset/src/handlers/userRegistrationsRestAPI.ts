import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SecurityUserRegistrationsPkRoute,
  getApiV1SecurityUserRegistrationsIndexRoute,
  getApiV1SecurityUserRegistrationsInfoRoute,
  getApiV1SecurityUserRegistrationsPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userRegistrationsRestAPIHandler = app
  .openapi(getApiV1SecurityUserRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityUserRegistrationsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityUserRegistrationsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityUserRegistrationsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
