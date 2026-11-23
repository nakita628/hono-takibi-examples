import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRoute,
  getAccountsAccountIdRoute,
  getAccountsHistoricalBalancesRoute,
  getAccountsRoute,
  postAccountsEvaluateAddressRoute,
  postAccountsRoute,
  putAccountsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsEvaluateAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsHistoricalBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
