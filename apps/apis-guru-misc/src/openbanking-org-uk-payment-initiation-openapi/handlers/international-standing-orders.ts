import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRoute,
  getInternationalStandingOrdersInternationalStandingOrderPaymentIdRoute,
  postInternationalStandingOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internationalStandingOrdersHandler = app
  .openapi(postInternationalStandingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalStandingOrdersInternationalStandingOrderPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
