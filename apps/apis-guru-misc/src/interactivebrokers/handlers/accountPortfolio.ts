import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountPositionsRoute,
  getAccountsAccountSummaryRoute,
  getAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountPortfolioHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
