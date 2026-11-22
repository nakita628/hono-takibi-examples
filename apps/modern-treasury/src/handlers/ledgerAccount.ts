import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLedgerAccountsIdRoute,
  getApiLedgerAccountsIdRoute,
  getApiLedgerAccountsRoute,
  patchApiLedgerAccountsIdRoute,
  postApiLedgerAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerAccountHandler = app
  .openapi(getApiLedgerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
