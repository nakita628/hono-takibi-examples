import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdWorkersServicesServiceNameEnvironmentsEnvironmentNameContentRoute,
  getAccountsAccountIdWorkersServicesServiceNameEnvironmentsEnvironmentNameSettingsRoute,
  patchAccountsAccountIdWorkersServicesServiceNameEnvironmentsEnvironmentNameSettingsRoute,
  putAccountsAccountIdWorkersServicesServiceNameEnvironmentsEnvironmentNameContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workerEnvironmentHandler = app
  .openapi(
    getAccountsAccountIdWorkersServicesServiceNameEnvironmentsEnvironmentNameContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAccountsAccountIdWorkersServicesServiceNameEnvironmentsEnvironmentNameContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdWorkersServicesServiceNameEnvironmentsEnvironmentNameSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAccountsAccountIdWorkersServicesServiceNameEnvironmentsEnvironmentNameSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
