import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePriceSheetSkuIdRoute,
  getPriceSheetAllPagePageSizeRoute,
  getPriceSheetSkuIdRoute,
  getPriceSheetSkuIdTradePolicyRoute,
  postPriceSheetContextRoute,
  postPriceSheetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const priceSheetHandler = app
  .openapi(postPriceSheetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPriceSheetAllPagePageSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPriceSheetContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePriceSheetSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPriceSheetSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPriceSheetSkuIdTradePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
