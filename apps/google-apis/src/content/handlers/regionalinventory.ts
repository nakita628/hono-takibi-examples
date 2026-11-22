import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMerchantIdProductsProductIdRegionalinventoryRoute,
  postRegionalinventoryBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionalinventoryHandler = app
  .openapi(postRegionalinventoryBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdProductsProductIdRegionalinventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
