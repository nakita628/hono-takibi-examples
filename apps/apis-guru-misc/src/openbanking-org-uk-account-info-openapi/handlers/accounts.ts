import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBalancesRoute,
  getAccountsAccountIdBeneficiariesRoute,
  getAccountsAccountIdDirectDebitsRoute,
  getAccountsAccountIdOffersRoute,
  getAccountsAccountIdPartiesRoute,
  getAccountsAccountIdPartyRoute,
  getAccountsAccountIdProductRoute,
  getAccountsAccountIdRoute,
  getAccountsAccountIdScheduledPaymentsRoute,
  getAccountsAccountIdStandingOrdersRoute,
  getAccountsAccountIdStatementsRoute,
  getAccountsAccountIdStatementsStatementIdFileRoute,
  getAccountsAccountIdStatementsStatementIdRoute,
  getAccountsAccountIdStatementsStatementIdTransactionsRoute,
  getAccountsAccountIdTransactionsRoute,
  getAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBeneficiariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDirectDebitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdScheduledPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStandingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStatementsStatementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStatementsStatementIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStatementsStatementIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
