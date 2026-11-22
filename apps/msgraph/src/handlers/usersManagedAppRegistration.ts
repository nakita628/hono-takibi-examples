import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdManagedAppRegistrationsCountRoute,
  getUsersUserIdManagedAppRegistrationsManagedAppRegistrationIdRoute,
  getUsersUserIdManagedAppRegistrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersManagedAppRegistrationHandler = app
  .openapi(getUsersUserIdManagedAppRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedAppRegistrationsManagedAppRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedAppRegistrationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
