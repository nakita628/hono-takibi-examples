import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEcommerceAttributionMetricsConversionSourceConversionSourceIdRoute,
  getEcommerceAttributionMetricsRoute,
  getEcommerceAttributionProductsConversionSourceConversionSourceIdRoute,
  getEcommerceConfigDisplayCurrencyRoute,
  postEcommerceActivateRoute,
  postEcommerceConfigDisplayCurrencyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ecommerceHandler = app
  .openapi(postEcommerceActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceAttributionMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceAttributionMetricsConversionSourceConversionSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceAttributionProductsConversionSourceConversionSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceConfigDisplayCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEcommerceConfigDisplayCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
