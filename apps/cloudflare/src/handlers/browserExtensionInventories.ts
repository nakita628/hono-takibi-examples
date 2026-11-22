import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBrowserExtensionConfigInventoriesRegistrationIdRoute,
  getAccountsAccountIdBrowserExtensionConfigInventoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const browserExtensionInventoriesHandler = app
  .openapi(getAccountsAccountIdBrowserExtensionConfigInventoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrowserExtensionConfigInventoriesRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
