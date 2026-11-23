import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPriceVariantsPriceVariantIdRoute,
  getPriceVariantsRoute,
  postPriceVariantsPriceVariantIdDeleteRoute,
  postPriceVariantsPriceVariantIdRoute,
  postPriceVariantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const priceVariantsHandler = app
  .openapi(postPriceVariantsPriceVariantIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPriceVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPriceVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPriceVariantsPriceVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPriceVariantsPriceVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
