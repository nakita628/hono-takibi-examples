import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCategoriesIdRoute,
  getCategoriesRoute,
  getEcommerceAttributionMetricsConversionSourceConversionSourceIdRoute,
  getEcommerceAttributionMetricsRoute,
  getEcommerceAttributionProductsConversionSourceConversionSourceIdRoute,
  getEcommerceConfigDisplayCurrencyRoute,
  getOrdersRoute,
  getProductsIdRoute,
  getProductsRoute,
  postCategoriesBatchRoute,
  postCategoriesRoute,
  postEcommerceActivateRoute,
  postEcommerceConfigDisplayCurrencyRoute,
  postOrdersStatusBatchRoute,
  postOrdersStatusRoute,
  postProductsBatchRoute,
  postProductsIdAlertsTypeRoute,
  postProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ecommerceHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersStatusBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsIdAlertsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
