import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePricingPricesItemIdFixedPriceTableIdRoute,
  deletePricingPricesItemIdRoute,
  getPricingPricesItemIdComputedPriceTableIdRoute,
  getPricingPricesItemIdFixedPriceTableIdRoute,
  getPricingPricesItemIdFixedRoute,
  getPricingPricesItemIdRoute,
  postPricingPricesItemIdFixedPriceTableIdRoute,
  putPricingPricesItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pricesAndFixedPricesHandler = app
  .openapi(deletePricingPricesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPricesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPricingPricesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPricesItemIdComputedPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPricesItemIdFixedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePricingPricesItemIdFixedPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPricesItemIdFixedPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPricingPricesItemIdFixedPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
