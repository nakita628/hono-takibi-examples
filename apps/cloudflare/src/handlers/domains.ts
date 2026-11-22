import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersDomainsDomainIdRoute,
  getAccountsAccountIdWorkersDomainsDomainIdRoute,
  getAccountsAccountIdWorkersDomainsRoute,
  putAccountsAccountIdWorkersDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getAccountsAccountIdWorkersDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
