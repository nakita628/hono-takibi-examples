import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdServiceProvisioningErrorsCountRoute,
  getUsersUserIdServiceProvisioningErrorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersServiceProvisioningErrorHandler = app
  .openapi(getUsersUserIdServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
