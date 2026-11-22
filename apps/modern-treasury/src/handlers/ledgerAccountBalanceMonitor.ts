import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLedgerAccountBalanceMonitorsIdRoute,
  getApiLedgerAccountBalanceMonitorsIdRoute,
  getApiLedgerAccountBalanceMonitorsRoute,
  patchApiLedgerAccountBalanceMonitorsIdRoute,
  postApiLedgerAccountBalanceMonitorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerAccountBalanceMonitorHandler = app
  .openapi(getApiLedgerAccountBalanceMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerAccountBalanceMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountBalanceMonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerAccountBalanceMonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountBalanceMonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
