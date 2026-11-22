import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAddonPvtReviewGetProductRateProductIdRoute,
  getApiCatalogPvtProductProductIdRoute,
  getApiCatalogSystemPubProductsVariationsProductIdRoute,
  getApiCatalogSystemPvtProductsGetProductAndSkuIdsRoute,
  getApiCatalogSystemPvtProductsProductgetbyrefidRefIdRoute,
  getApiCatalogSystemPvtProductsProductgetProductIdRoute,
  postApiCatalogPvtProductRoute,
  putApiCatalogPvtProductProductIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productHandler = app
  .openapi(getApiAddonPvtReviewGetProductRateProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtProductProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtProductProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsVariationsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtProductsGetProductAndSkuIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtProductsProductgetProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtProductsProductgetbyrefidRefIdRoute, (c) => {
    throw new Error('Not implemented')
  })
