import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdLogsControlCmbConfigRoute,
  getAccountsAccountIdLogsControlCmbConfigRoute,
  postAccountsAccountIdLogsControlCmbConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logcontrolCMBConfigForAnAccountHandler = app
  .openapi(deleteAccountsAccountIdLogsControlCmbConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogsControlCmbConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogsControlCmbConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
