import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TradingAccountsAccountIdOrdersOrderIdRoute,
  deleteV1TradingAccountsAccountIdOrdersRoute,
  deleteV1TradingAccountsAccountIdPositionsRoute,
  deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute,
  getV1AccountsPositionsRoute,
  getV1TradingAccountsAccountIdLimitsRoute,
  getV1TradingAccountsAccountIdOrdersByClientOrderIdRoute,
  getV1TradingAccountsAccountIdOrdersOrderIdRoute,
  getV1TradingAccountsAccountIdOrdersRoute,
  getV1TradingAccountsAccountIdPositionsRoute,
  getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute,
  patchV1TradingAccountsAccountIdAccountConfigurationsRoute,
  patchV1TradingAccountsAccountIdOrdersOrderIdRoute,
  postV1TradingAccountsAccountIdOrdersEstimationRoute,
  postV1TradingAccountsAccountIdOrdersRoute,
  postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseRoute,
  postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingHandler = app
  .openapi(getV1AccountsPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TradingAccountsAccountIdAccountConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TradingAccountsAccountIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdOrdersEstimationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdOrdersByClientOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseRoute, (c) => {
    throw new Error('Not implemented')
  })
