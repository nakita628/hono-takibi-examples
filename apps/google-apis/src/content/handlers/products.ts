import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdProductsProductIdRoute,
  getMerchantIdProductsProductIdRoute,
  getMerchantIdProductsRoute,
  patchMerchantIdProductsProductIdRoute,
  postMerchantIdProductsRoute,
  postProductsBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(postProductsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
