import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPricingBundlePricingRoute,
  postPricingCompetitivePricingRoute,
  postPricingCostPlusPricingRoute,
  postPricingDecoyPricingRoute,
  postPricingOddPricingRoute,
  postPricingPenetrationPricingRoute,
  postPricingPriceElasticityOfDemandRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pricingHandler = app
  .openapi(postPricingBundlePricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPricingCompetitivePricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPricingCostPlusPricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPricingDecoyPricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPricingOddPricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPricingPenetrationPricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPricingPriceElasticityOfDemandRoute, (c) => {
    throw new Error('Not implemented')
  })
