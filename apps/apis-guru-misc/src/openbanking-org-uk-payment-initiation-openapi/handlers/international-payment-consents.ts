import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternationalPaymentConsentsConsentIdFundsConfirmationRoute,
  getInternationalPaymentConsentsConsentIdRoute,
  postInternationalPaymentConsentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internationalPaymentConsentsHandler = app
  .openapi(postInternationalPaymentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalPaymentConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalPaymentConsentsConsentIdFundsConfirmationRoute, (c) => {
    throw new Error('Not implemented')
  })
