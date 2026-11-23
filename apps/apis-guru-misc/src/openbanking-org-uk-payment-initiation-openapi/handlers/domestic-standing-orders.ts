import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRoute,
  getDomesticStandingOrdersDomesticStandingOrderIdRoute,
  postDomesticStandingOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domesticStandingOrdersHandler = app
  .openapi(postDomesticStandingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticStandingOrdersDomesticStandingOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
