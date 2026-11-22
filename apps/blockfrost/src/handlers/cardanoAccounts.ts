import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsStakeAddressAddressesAssetsRoute,
  getAccountsStakeAddressAddressesRoute,
  getAccountsStakeAddressAddressesTotalRoute,
  getAccountsStakeAddressDelegationsRoute,
  getAccountsStakeAddressHistoryRoute,
  getAccountsStakeAddressMirsRoute,
  getAccountsStakeAddressRegistrationsRoute,
  getAccountsStakeAddressRewardsRoute,
  getAccountsStakeAddressRoute,
  getAccountsStakeAddressTransactionsRoute,
  getAccountsStakeAddressUtxosRoute,
  getAccountsStakeAddressWithdrawalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardanoAccountsHandler = app
  .openapi(getAccountsStakeAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressRewardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressDelegationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressWithdrawalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressMirsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressAddressesAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressAddressesTotalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressUtxosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsStakeAddressTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
