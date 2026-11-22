import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternationalPaymentConsentsConsentIdFundsConfirmationRoute,
  getInternationalPaymentConsentsConsentIdRoute,
  getInternationalPaymentsInternationalPaymentIdRoute,
  postInternationalPaymentConsentsRoute,
  postInternationalPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internationalPaymentsHandler = app
  .openapi(postInternationalPaymentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalPaymentConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalPaymentConsentsConsentIdFundsConfirmationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInternationalPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalPaymentsInternationalPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
