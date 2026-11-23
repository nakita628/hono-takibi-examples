import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLedgerAccountBalancesRoute,
  postLedgerAccountBalancesUpdateOverdraftLimitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerAccountBalancesHandler = app
  .openapi(postLedgerAccountBalancesUpdateOverdraftLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLedgerAccountBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
