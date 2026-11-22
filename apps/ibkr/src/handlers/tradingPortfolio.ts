import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ApiPortfolio2AccountIdPositionsRoute,
  getV1ApiPortfolioAccountIdAllocationRoute,
  getV1ApiPortfolioAccountIdComboPositionsRoute,
  getV1ApiPortfolioAccountIdLedgerRoute,
  getV1ApiPortfolioAccountIdMetaRoute,
  getV1ApiPortfolioAccountIdPositionConidRoute,
  getV1ApiPortfolioAccountIdPositionsPageIdRoute,
  getV1ApiPortfolioAccountIdSummaryRoute,
  getV1ApiPortfolioAccountsRoute,
  getV1ApiPortfolioPositionsConidRoute,
  getV1ApiPortfolioSubaccounts2Route,
  getV1ApiPortfolioSubaccountsRoute,
  postV1ApiPortfolioAccountIdPositionsInvalidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingPortfolioHandler = app
  .openapi(postV1ApiPortfolioAccountIdPositionsInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioPositionsConidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioSubaccounts2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdAllocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdComboPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdLedgerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdPositionConidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdPositionsPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolio2AccountIdPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
