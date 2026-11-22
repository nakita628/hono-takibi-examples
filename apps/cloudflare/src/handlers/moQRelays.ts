import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMoqRelaysRelayIdRoute,
  deleteAccountsAccountIdMoqRelaysRelayIdTokensJtiRoute,
  getAccountsAccountIdMoqRelaysRelayIdRoute,
  getAccountsAccountIdMoqRelaysRelayIdTokensRoute,
  getAccountsAccountIdMoqRelaysRoute,
  postAccountsAccountIdMoqRelaysRelayIdTokensRoute,
  postAccountsAccountIdMoqRelaysRoute,
  putAccountsAccountIdMoqRelaysRelayIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const moQRelaysHandler = app
  .openapi(getAccountsAccountIdMoqRelaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMoqRelaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMoqRelaysRelayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMoqRelaysRelayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMoqRelaysRelayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMoqRelaysRelayIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMoqRelaysRelayIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMoqRelaysRelayIdTokensJtiRoute, (c) => {
    throw new Error('Not implemented')
  })
