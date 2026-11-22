import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticPaymentConsentsConsentIdFundsConfirmationRoute,
  getDomesticPaymentConsentsConsentIdRoute,
  getDomesticPaymentsDomesticPaymentIdRoute,
  postDomesticPaymentConsentsRoute,
  postDomesticPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domesticPaymentsHandler = app
  .openapi(postDomesticPaymentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticPaymentConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticPaymentConsentsConsentIdFundsConfirmationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomesticPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticPaymentsDomesticPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
