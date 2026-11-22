import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1LocationIdOrdersOrderIdRoute,
  getV1LocationIdOrdersRoute,
  getV1LocationIdPaymentsPaymentIdRoute,
  getV1LocationIdPaymentsRoute,
  getV1LocationIdRefundsRoute,
  getV1LocationIdSettlementsRoute,
  getV1LocationIdSettlementsSettlementIdRoute,
  postV1LocationIdRefundsRoute,
  putV1LocationIdOrdersOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1TransactionsHandler = app
  .openapi(getV1LocationIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1LocationIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LocationIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdSettlementsSettlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
