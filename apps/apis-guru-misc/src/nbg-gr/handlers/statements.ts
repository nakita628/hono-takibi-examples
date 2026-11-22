import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdStatementsRoute,
  getAccountsAccountIdStatementsStatementIdFileRoute,
  getAccountsAccountIdStatementsStatementIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statementsHandler = app
  .openapi(getAccountsAccountIdStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStatementsStatementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStatementsStatementIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
