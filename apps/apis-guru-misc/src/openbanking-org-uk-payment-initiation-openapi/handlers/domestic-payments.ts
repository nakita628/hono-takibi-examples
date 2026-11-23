import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticPaymentsDomesticPaymentIdPaymentDetailsRoute,
  getDomesticPaymentsDomesticPaymentIdRoute,
  postDomesticPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domesticPaymentsHandler = app
  .openapi(postDomesticPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticPaymentsDomesticPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticPaymentsDomesticPaymentIdPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
