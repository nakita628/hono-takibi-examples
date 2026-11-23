import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternationalPaymentsInternationalPaymentIdPaymentDetailsRoute,
  getInternationalPaymentsInternationalPaymentIdRoute,
  postInternationalPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internationalPaymentsHandler = app
  .openapi(postInternationalPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalPaymentsInternationalPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalPaymentsInternationalPaymentIdPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
