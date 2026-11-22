import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingLedgerAccountsIdRoute,
  getAccountingLedgerAccountsIdRoute,
  getAccountingLedgerAccountsRoute,
  patchAccountingLedgerAccountsIdRoute,
  postAccountingLedgerAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerAccountsHandler = app
  .openapi(getAccountingLedgerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingLedgerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
