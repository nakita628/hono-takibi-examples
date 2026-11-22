import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
  deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolRoute,
  getV1TradingAccountsAccountIdWatchlistsRoute,
  getV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
  postV1TradingAccountsAccountIdWatchlistsRoute,
  postV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
  putV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watchlistHandler = app
  .openapi(getV1TradingAccountsAccountIdWatchlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdWatchlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
