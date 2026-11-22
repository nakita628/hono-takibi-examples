import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdSettlementreportsRoute,
  getMerchantIdSettlementreportsSettlementIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settlementreportsHandler = app
  .openapi(getMerchantIdSettlementreportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdSettlementreportsSettlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
