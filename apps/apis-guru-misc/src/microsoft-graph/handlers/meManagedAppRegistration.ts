import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeManagedAppRegistrationsManagedAppRegistrationIdRoute,
  getMeManagedAppRegistrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meManagedAppRegistrationHandler = app
  .openapi(getMeManagedAppRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedAppRegistrationsManagedAppRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
