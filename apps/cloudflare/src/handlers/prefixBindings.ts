import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlsRegionalServicesPrefixBindingsBindingIdRoute,
  getAccountsAccountIdDlsRegionalServicesPrefixBindingsBindingIdRoute,
  getAccountsAccountIdDlsRegionalServicesPrefixBindingsRoute,
  patchAccountsAccountIdDlsRegionalServicesPrefixBindingsBindingIdRoute,
  postAccountsAccountIdDlsRegionalServicesPrefixBindingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prefixBindingsHandler = app
  .openapi(getAccountsAccountIdDlsRegionalServicesPrefixBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlsRegionalServicesPrefixBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlsRegionalServicesPrefixBindingsBindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlsRegionalServicesPrefixBindingsBindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDlsRegionalServicesPrefixBindingsBindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
