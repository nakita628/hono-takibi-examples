import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdPagesProjectsProjectNameDomainsDomainNameRoute,
  getAccountsAccountIdPagesProjectsProjectNameDomainsDomainNameRoute,
  getAccountsAccountIdPagesProjectsProjectNameDomainsRoute,
  patchAccountsAccountIdPagesProjectsProjectNameDomainsDomainNameRoute,
  postAccountsAccountIdPagesProjectsProjectNameDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pagesDomainsHandler = app
  .openapi(getAccountsAccountIdPagesProjectsProjectNameDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPagesProjectsProjectNameDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPagesProjectsProjectNameDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPagesProjectsProjectNameDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPagesProjectsProjectNameDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
