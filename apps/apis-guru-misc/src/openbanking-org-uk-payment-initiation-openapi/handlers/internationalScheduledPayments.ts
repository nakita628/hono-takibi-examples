import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRoute,
  getInternationalScheduledPaymentConsentsConsentIdRoute,
  getInternationalScheduledPaymentsInternationalScheduledPaymentIdRoute,
  postInternationalScheduledPaymentConsentsRoute,
  postInternationalScheduledPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internationalScheduledPaymentsHandler = app
  .openapi(postInternationalScheduledPaymentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalScheduledPaymentConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInternationalScheduledPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalScheduledPaymentsInternationalScheduledPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
