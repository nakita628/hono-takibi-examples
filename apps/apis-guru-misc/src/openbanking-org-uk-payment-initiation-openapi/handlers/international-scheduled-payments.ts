import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRoute,
  getInternationalScheduledPaymentsInternationalScheduledPaymentIdRoute,
  postInternationalScheduledPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internationalScheduledPaymentsHandler = app
  .openapi(postInternationalScheduledPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalScheduledPaymentsInternationalScheduledPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
