import { OpenAPIHono } from '@hono/zod-openapi'
import { getMerchantIdSettlementreportsSettlementIdTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const settlementtransactionsHandler = app.openapi(
  getMerchantIdSettlementreportsSettlementIdTransactionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
