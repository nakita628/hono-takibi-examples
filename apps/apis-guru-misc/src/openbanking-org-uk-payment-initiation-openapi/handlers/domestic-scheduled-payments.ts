import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRoute,
  getDomesticScheduledPaymentsDomesticScheduledPaymentIdRoute,
  postDomesticScheduledPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domesticScheduledPaymentsHandler = app
  .openapi(postDomesticScheduledPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticScheduledPaymentsDomesticScheduledPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
