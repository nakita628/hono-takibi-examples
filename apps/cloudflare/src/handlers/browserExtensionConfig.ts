import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBrowserExtensionConfigRoute,
  getAccountsAccountIdBrowserExtensionConfigRoute,
  postAccountsAccountIdBrowserExtensionConfigLogsExtensionEventsSearchRoute,
  postAccountsAccountIdBrowserExtensionConfigLogsExtensionEventsTimeseriesRoute,
  postAccountsAccountIdBrowserExtensionConfigRoute,
  putAccountsAccountIdBrowserExtensionConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const browserExtensionConfigHandler = app
  .openapi(deleteAccountsAccountIdBrowserExtensionConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrowserExtensionConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrowserExtensionConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdBrowserExtensionConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrowserExtensionConfigLogsExtensionEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrowserExtensionConfigLogsExtensionEventsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
