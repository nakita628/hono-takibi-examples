import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDevicesRegistrationsRegistrationIdRoute,
  getAccountsAccountIdDevicesRegistrationsRegistrationIdRoute,
  getAccountsAccountIdDevicesRegistrationsRoute,
  postAccountsAccountIdDevicesRegistrationsRevokeRoute,
  postAccountsAccountIdDevicesRegistrationsUnrevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registrationsHandler = app
  .openapi(getAccountsAccountIdDevicesRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesRegistrationsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesRegistrationsUnrevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesRegistrationsRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesRegistrationsRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
