import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOfferManagerPvtOffersRoute,
  getOfferManagerPvtProductProductIdRoute,
  getOfferManagerPvtProductProductIdSkuSkuIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const matchedOffersHandler = app
  .openapi(getOfferManagerPvtOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferManagerPvtProductProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferManagerPvtProductProductIdSkuSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
