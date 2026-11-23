import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRoute,
  getInternationalScheduledPaymentConsentsConsentIdRoute,
  postInternationalScheduledPaymentConsentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internationalScheduledPaymentConsentsHandler = app
  .openapi(postInternationalScheduledPaymentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalScheduledPaymentConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRoute, (c) => {
    throw new Error('Not implemented')
  })
