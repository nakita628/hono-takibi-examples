import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticPaymentsDomesticPaymentIdPaymentDetailsRoute,
  getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRoute,
  getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRoute,
  getFilePaymentsFilePaymentIdPaymentDetailsRoute,
  getInternationalPaymentsInternationalPaymentIdPaymentDetailsRoute,
  getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRoute,
  getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentDetailsHandler = app
  .openapi(getDomesticPaymentsDomesticPaymentIdPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilePaymentsFilePaymentIdPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalPaymentsInternationalPaymentIdPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
