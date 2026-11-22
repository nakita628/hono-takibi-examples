import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdRegistrarDomainSearchRoute,
  getAccountsAccountIdRegistrarSandboxDomainSearchRoute,
  postAccountsAccountIdRegistrarDomainCheckRoute,
  postAccountsAccountIdRegistrarDomainTransferCheckRoute,
  postAccountsAccountIdRegistrarSandboxDomainCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainDiscoveryHandler = app
  .openapi(postAccountsAccountIdRegistrarSandboxDomainCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarSandboxDomainSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRegistrarDomainCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarDomainSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRegistrarDomainTransferCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
