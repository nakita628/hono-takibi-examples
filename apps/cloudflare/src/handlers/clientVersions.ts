import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDevicesClientVersionsRoute,
  getAccountsAccountIdDevicesClientVersionsTargetEnvironmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientVersionsHandler = app
  .openapi(getAccountsAccountIdDevicesClientVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesClientVersionsTargetEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
