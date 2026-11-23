import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSchemasRegistrationsIndexRoute,
  getSchemasRegistrationsRegistrationSchemaIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemasHandler = app
  .openapi(getSchemasRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasRegistrationsRegistrationSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
