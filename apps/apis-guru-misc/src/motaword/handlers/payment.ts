import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentCardIdDeleteRoute,
  getPaymentCardIdRoute,
  getPaymentRoute,
  postPaymentCardIdResetPaymentCodeRoute,
  postPaymentResetCorporatePaymentCodeRoute,
  postPaymentRoute,
  postPaymentToggleCorporateAutoChargeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentHandler = app
  .openapi(getPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentResetCorporatePaymentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentToggleCorporateAutoChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePaymentCardIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentCardIdResetPaymentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
