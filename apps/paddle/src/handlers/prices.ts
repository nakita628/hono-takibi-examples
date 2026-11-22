import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPricesPriceIdRoute,
  getPricesRoute,
  patchPricesPriceIdRoute,
  postPricesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pricesHandler = app
  .openapi(getPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricesPriceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPricesPriceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
