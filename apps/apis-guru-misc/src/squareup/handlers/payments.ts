import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2PaymentsPaymentIdRoute,
  getV2PaymentsRoute,
  postV2PaymentsCancelRoute,
  postV2PaymentsPaymentIdCancelRoute,
  postV2PaymentsPaymentIdCompleteRoute,
  postV2PaymentsRoute,
  putV2PaymentsPaymentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getV2PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsPaymentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsPaymentIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
