import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticPaymentConsentsConsentIdFundsConfirmationRoute,
  getDomesticPaymentConsentsConsentIdRoute,
  postDomesticPaymentConsentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domesticPaymentConsentsHandler = app
  .openapi(postDomesticPaymentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticPaymentConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticPaymentConsentsConsentIdFundsConfirmationRoute, (c) => {
    throw new Error('Not implemented')
  })
