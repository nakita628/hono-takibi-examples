import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetFullPricingOutboundTypeRoute,
  getGetPrefixPricingOutboundTypeRoute,
  getGetPricingOutboundTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pricingHandler = app
  .openapi(getGetFullPricingOutboundTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetPrefixPricingOutboundTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetPricingOutboundTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
