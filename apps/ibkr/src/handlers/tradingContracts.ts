import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ApiContractTradingScheduleRoute,
  getV1ApiIserverContractConidAlgosRoute,
  getV1ApiIserverContractConidInfoAndRulesRoute,
  getV1ApiIserverContractConidInfoRoute,
  getV1ApiIserverCurrencyPairsRoute,
  getV1ApiIserverExchangerateRoute,
  getV1ApiIserverSecdefBondFiltersRoute,
  getV1ApiIserverSecdefInfoRoute,
  getV1ApiIserverSecdefSearchRoute,
  getV1ApiIserverSecdefStrikesRoute,
  getV1ApiTrsrvAllConidsRoute,
  getV1ApiTrsrvFuturesRoute,
  getV1ApiTrsrvSecdefRoute,
  getV1ApiTrsrvSecdefScheduleRoute,
  getV1ApiTrsrvStocksRoute,
  postV1ApiIserverContractRulesRoute,
  postV1ApiIserverSecdefSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingContractsHandler = app
  .openapi(postV1ApiIserverContractRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverSecdefSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverSecdefSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiContractTradingScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverContractConidAlgosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverContractConidInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverContractConidInfoAndRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverCurrencyPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverExchangerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverSecdefBondFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverSecdefInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverSecdefStrikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiTrsrvAllConidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiTrsrvFuturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiTrsrvSecdefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiTrsrvSecdefScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiTrsrvStocksRoute, (c) => {
    throw new Error('Not implemented')
  })
