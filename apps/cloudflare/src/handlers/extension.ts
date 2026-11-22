import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdRegistrarExtensionsExtensionRoute,
  getAccountsAccountIdRegistrarExtensionsRoute,
  getAccountsAccountIdRegistrarSandboxExtensionsExtensionRoute,
  getAccountsAccountIdRegistrarSandboxExtensionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const extensionHandler = app
  .openapi(getAccountsAccountIdRegistrarSandboxExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarSandboxExtensionsExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarExtensionsExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
