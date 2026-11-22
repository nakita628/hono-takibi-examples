import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2PaymentsPaymentIdRefundsRefundIdRoute,
  getV2PaymentsPaymentIdRefundsRefundIdRoute,
  getV2PaymentsPaymentIdRefundsRoute,
  getV2RefundsRoute,
  postV2PaymentsPaymentIdRefundsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const refundsAPIHandler = app
  .openapi(postV2PaymentsPaymentIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PaymentsPaymentIdRefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
