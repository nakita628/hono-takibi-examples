import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentCardIdDeleteRoute,
  getPaymentCardIdRoute,
  postPaymentCardIdResetPaymentCodeRoute,
  postPaymentResetCorporatePaymentCodeRoute,
  postPaymentToggleCorporateAutoChargeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentHandler = app
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
