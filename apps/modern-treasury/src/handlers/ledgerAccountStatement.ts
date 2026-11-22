import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLedgerAccountStatementsIdRoute,
  postApiLedgerAccountStatementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerAccountStatementHandler = app
  .openapi(postApiLedgerAccountStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountStatementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
