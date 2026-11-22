import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2SettlementsNextRoute,
  getV2SettlementsOpenRoute,
  getV2SettlementsRoute,
  getV2SettlementsSettlementIdCapturesRoute,
  getV2SettlementsSettlementIdChargebacksRoute,
  getV2SettlementsSettlementIdPaymentsRoute,
  getV2SettlementsSettlementIdRefundsRoute,
  getV2SettlementsSettlementIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settlementsAPIHandler = app
  .openapi(getV2SettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsSettlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsSettlementIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsSettlementIdCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsSettlementIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SettlementsSettlementIdChargebacksRoute, (c) => {
    throw new Error('Not implemented')
  })
