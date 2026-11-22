import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLedgerAccountSettlementsIdLedgerEntriesRoute,
  getApiLedgerAccountSettlementsIdRoute,
  getApiLedgerAccountSettlementsRoute,
  patchApiLedgerAccountSettlementsIdLedgerEntriesRoute,
  patchApiLedgerAccountSettlementsIdRoute,
  postApiLedgerAccountSettlementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerAccountSettlementHandler = app
  .openapi(getApiLedgerAccountSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerAccountSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountSettlementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerAccountSettlementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerAccountSettlementsIdLedgerEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountSettlementsIdLedgerEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
