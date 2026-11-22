import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLedgerEntriesIdRoute,
  getApiLedgerEntriesRoute,
  patchApiLedgerEntriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerEntryHandler = app
  .openapi(getApiLedgerEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
