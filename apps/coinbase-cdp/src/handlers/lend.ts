import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2LendPositionsRoute,
  getV2LendVaultsRoute,
  getV2LendVaultsVaultIdRoute,
  postV2EvmAccountsAddressLendDepositRoute,
  postV2EvmAccountsAddressLendRedeemFeesRoute,
  postV2EvmAccountsAddressLendWithdrawRoute,
  postV2EvmSmartAccountsAddressLendDepositRoute,
  postV2EvmSmartAccountsAddressLendRedeemFeesRoute,
  postV2EvmSmartAccountsAddressLendWithdrawRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lendHandler = app
  .openapi(getV2LendPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LendVaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LendVaultsVaultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressLendRedeemFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressLendRedeemFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressLendDepositRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressLendDepositRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressLendWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressLendWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
