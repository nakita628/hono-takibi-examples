import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdRegistrarRegistrationsDomainNameRegistrationStatusRoute,
  getAccountsAccountIdRegistrarRegistrationsDomainNameRoute,
  getAccountsAccountIdRegistrarRegistrationsDomainNameUpdateStatusRoute,
  getAccountsAccountIdRegistrarRegistrationsRoute,
  getAccountsAccountIdRegistrarSandboxRegistrationsDomainNameRegistrationStatusRoute,
  getAccountsAccountIdRegistrarSandboxRegistrationsDomainNameRoute,
  getAccountsAccountIdRegistrarSandboxRegistrationsDomainNameUpdateStatusRoute,
  getAccountsAccountIdRegistrarSandboxRegistrationsRoute,
  patchAccountsAccountIdRegistrarRegistrationsDomainNameRoute,
  patchAccountsAccountIdRegistrarSandboxRegistrationsDomainNameRoute,
  postAccountsAccountIdRegistrarRegistrationsRoute,
  postAccountsAccountIdRegistrarSandboxRegistrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registrarRegistrationHandler = app
  .openapi(getAccountsAccountIdRegistrarSandboxRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRegistrarSandboxRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarSandboxRegistrationsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdRegistrarSandboxRegistrationsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdRegistrarSandboxRegistrationsDomainNameRegistrationStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdRegistrarSandboxRegistrationsDomainNameUpdateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRegistrarRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarRegistrationsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdRegistrarRegistrationsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarRegistrationsDomainNameRegistrationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarRegistrationsDomainNameUpdateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
