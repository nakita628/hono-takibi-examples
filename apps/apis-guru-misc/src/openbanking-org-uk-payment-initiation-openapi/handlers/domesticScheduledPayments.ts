import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticScheduledPaymentConsentsConsentIdRoute,
  getDomesticScheduledPaymentsDomesticScheduledPaymentIdRoute,
  postDomesticScheduledPaymentConsentsRoute,
  postDomesticScheduledPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domesticScheduledPaymentsHandler = app
  .openapi(postDomesticScheduledPaymentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticScheduledPaymentConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomesticScheduledPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticScheduledPaymentsDomesticScheduledPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
