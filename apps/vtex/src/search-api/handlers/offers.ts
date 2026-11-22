import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPubProductsOffersProductIdRoute,
  getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offersHandler = app
  .openapi(getApiCatalogSystemPubProductsOffersProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
