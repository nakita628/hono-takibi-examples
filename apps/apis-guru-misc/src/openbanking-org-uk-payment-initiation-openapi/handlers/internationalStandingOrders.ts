import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternationalStandingOrderConsentsConsentIdRoute,
  getInternationalStandingOrdersInternationalStandingOrderPaymentIdRoute,
  postInternationalStandingOrderConsentsRoute,
  postInternationalStandingOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internationalStandingOrdersHandler = app
  .openapi(postInternationalStandingOrderConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalStandingOrderConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInternationalStandingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalStandingOrdersInternationalStandingOrderPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
