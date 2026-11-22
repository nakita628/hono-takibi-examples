import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCheckoutPubPickupPointsRoute,
  getApiCheckoutPubPostalCodeCountryCodePostalCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fulfillmentHandler = app
  .openapi(getApiCheckoutPubPickupPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCheckoutPubPostalCodeCountryCodePostalCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
