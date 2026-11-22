import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticStandingOrderConsentsConsentIdRoute,
  getDomesticStandingOrdersDomesticStandingOrderIdRoute,
  postDomesticStandingOrderConsentsRoute,
  postDomesticStandingOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domesticStandingOrdersHandler = app
  .openapi(postDomesticStandingOrderConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticStandingOrderConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomesticStandingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticStandingOrdersDomesticStandingOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
