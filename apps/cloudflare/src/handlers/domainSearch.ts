import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBrandProtectionQueriesRoute,
  getAccountsAccountIdBrandProtectionMatchesDownloadRoute,
  getAccountsAccountIdBrandProtectionMatchesRoute,
  getAccountsAccountIdBrandProtectionQueriesRoute,
  getAccountsAccountIdBrandProtectionTotalQueriesRoute,
  patchAccountsAccountIdBrandProtectionQueriesRoute,
  postAccountsAccountIdBrandProtectionQueriesBulkRoute,
  postAccountsAccountIdBrandProtectionQueriesQueryIdMatchesDomainIdDismissRoute,
  postAccountsAccountIdBrandProtectionQueriesQueryIdMatchesDomainIdUndismissRoute,
  postAccountsAccountIdBrandProtectionQueriesRoute,
  postAccountsAccountIdBrandProtectionSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainSearchHandler = app
  .openapi(getAccountsAccountIdBrandProtectionMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionMatchesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBrandProtectionQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBrandProtectionQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionQueriesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionQueriesQueryIdMatchesDomainIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionQueriesQueryIdMatchesDomainIdUndismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionTotalQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
